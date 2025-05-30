// Module de téléchargement et extraction du modpack
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
require('dotenv').config();
console.log('MODPACK_URL:', process.env.MODPACK_URL); // DEBUG

function downloadModpack(destFolder, onProgress) {
    return new Promise((resolve, reject) => {
        const url = process.env.MODPACK_URL;
        let proto;
        if (url.startsWith('https://')) {
            proto = require('https');
        } else if (url.startsWith('http://')) {
            proto = require('http');
        } else {
            return reject(new Error('URL du modpack invalide (doit commencer par http:// ou https://)'));
        }
        const zipPath = path.join(destFolder, 'modpack.zip');
        const file = fs.createWriteStream(zipPath);
        proto.get(url, response => {
            if (response.statusCode !== 200) {
                return reject(new Error('Erreur de téléchargement : ' + response.statusCode));
            }
            const total = parseInt(response.headers['content-length'] || '0', 10);
            let downloaded = 0;
            response.on('data', chunk => {
                downloaded += chunk.length;
                if (onProgress && total) onProgress(downloaded, total);
            });
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    // Vérification de la taille du fichier téléchargé
                    fs.stat(zipPath, (err, stats) => {
                        if (err) return reject(new Error('Erreur lors de la vérification du fichier téléchargé.'));
                        console.log('Taille du modpack.zip téléchargé :', stats.size, 'octets');
                        if (stats.size < 1024) {
                            fs.unlink(zipPath, () => {});
                            return reject(new Error('Le fichier ZIP téléchargé est trop petit ou vide.'));
                        }
                        resolve(zipPath);
                    });
                });
            });
        }).on('error', err => {
            fs.unlink(zipPath, () => reject(new Error('Erreur réseau : ' + err.message)));
        });
    });
}

function extractModpack(zipPath, destFolder) {
    return new Promise((resolve, reject) => {
        try {
            const zip = new AdmZip(zipPath);
            zip.extractAllTo(destFolder, true);
            console.log('Extraction terminée avec adm-zip.');
            resolve();
        } catch (err) {
            console.error('Erreur lors de l\'extraction du modpack (adm-zip) :', err);
            reject(new Error("Extraction impossible : le fichier ZIP est peut-être corrompu ou invalide. Détail : " + err.message));
        }
    });
}

module.exports = { downloadModpack, extractModpack };
