import * as fs from 'fs';

class JSON_Parser {
    private async fileContent(fileName: string): Promise<string> {
        const content = await fs.promises.readFile(fileName, 'utf8')
        return content
    }

    public async run(argv: string[]): Promise<void> {
        const fileName = argv[0] 

        const content = await this.fileContent(fileName)

        console.log(content)
    }
}

const parser = new JSON_Parser();
parser.run(process.argv.splice(2))

