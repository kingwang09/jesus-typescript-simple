import * as fs from 'fs';
import * as path from 'path';
interface AffiliateManagement {
    categoryKey: string;
    model: string;
    oHouseLink?: string;
    coupangLink?: string;
}
async function main(){
    const results: AffiliateManagement[] = [];
    console.log(1);
    console.log('__dirname: ', __dirname);
    const filePath = path.resolve(__dirname, 'affiliate_link_management.csv');;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log('err: ', err);
        }

        const lines = data.trim().split('\n');
        const header = lines[0].split(',');
        console.log('header: ', header);
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].split(',');
            const affiliateManagement = {
                categoryKey: line[0].trim(),
                model: line[1].trim(),
                coupangLink: line[2] && line[2].trim() != '' ? line[2].trim().replace('\r', '') : undefined,
                oHouseLink: line[3] && line[3].trim() != ''? line[3].trim().replace('\r', ''): undefined,

            };
            results.push(affiliateManagement);
            console.log('row: ', affiliateManagement);
        }
    });
}
main();