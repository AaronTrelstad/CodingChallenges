import * as fs from 'fs';

/*
Use 
tsc wc.ts to generate js file
node wc.js -{command} test.txt to run
*/

interface CountResults {
    bytes: number
    lines: number
    words: number
    characters: number
}

class CCWC {
    private async countFile(fileName: string): Promise<CountResults> {
        const content = await fs.promises.readFile(fileName, 'utf8');
        return this.count(content);
    }

    private count(content: string): CountResults {
        const bytes = Buffer.from(content).length;
        const lines = content.split("/n").length;
        const words = content.trim().split(" ").length + 1;
        const characters = content.length;

        return {bytes, lines, words, characters};
    }

    private format(results: CountResults, options: string[]): string {
        let response: string = "";

        if (options.includes('-c')) {
            response = response + " " + String(results.bytes);
        }
        
        if (options.includes('-l')) {
            response = response + " " + String(results.lines);
        }
        
        if (options.includes('-w')) {
            response = response + " " + String(results.words);
        }
        
        if (options.includes('-m')) {
            response = response + " " + String(results.characters);
        }

        return response;
    }

    public async run(args: string[]): Promise<void> {
        let options: string[] = [];
        let fileName: string | undefined;

        for (const arg of args) {
            if (arg.includes("-")) {
                options.push(arg)
            } else {
                fileName = arg
                break
            }
        }

        if (options.length === 0) {
            options = ["-c", "-l", "-w"]
        }
        
        let results: CountResults | null;

        if (fileName) {
            results = await this.countFile(fileName)
        } else {
            results = null;
        }

        if (results) {
            const formattedResults = this.format(results, options) + " " + fileName;
            console.log(formattedResults);
        } else {
            console.log("No file name specified")
        }
    }
}

const ccwc = new CCWC();
ccwc.run(process.argv.slice(2))



