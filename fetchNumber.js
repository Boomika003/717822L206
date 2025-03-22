const express=require('express');
const cors=require('cors');
const API_URLS=3000;

const fetchNumber = (category) => {
    return new Promise((resolve) => {
        const url = API_URLS[category];
        if (!url) return resolve(null);
        const req = https.get(url, (res) => {
            if (res.statusCode !== 200) return resolve(null); 
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    return resolve(typeof json.number === 'number' ? json.number : null);
                } catch (error) {
                    return resolve(null);
                }
            });
        });
        req.on('error', () => resolve(null));
        req.setTimeout(500, () => {
            req.abort();
            resolve(null);
        });
    });
};

module.exports = { fetchNumber };