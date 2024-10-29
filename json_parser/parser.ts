import * as fs from 'fs';

enum ESCAPE {
    NEW_LINE = '/n'
}

enum NUMBERS {
    ONE = '1',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
    FIVE = '5',
    SIX = '6',
    SEVEN = '7',
    EIGHT = '8',
    NINE = '9',
    MINUS = '-'
}

enum TOKENS {
    OBJECT_OPEN = '{',
    OBJECT_CLOSE = '}',
    ARRAY_OPEN = '[',
    ARRAY_CLOSE = ']',
    STRING = '"'
}

class JSON_Parser {
    private pos: number = 0
    private stack: string[] = []
    private content: string[];

    public async run(argv: string[]): Promise<void> {
        const fileName = argv[0] 
        const response = await this.fileContent(fileName);
    }

    private async fileContent(fileName: string): Promise<boolean> {
        const data = await fs.promises.readFile(fileName, 'utf8')
        this.content = data.split("");
        const response = this.parse(this.content)

        return response
    }

    private async parse(content: string[]): Promise<boolean> {

        while (this.pos < content.length) {
            let current = content[this.pos];

            switch (current) {
                case TOKENS.OBJECT_OPEN:
                    this.stack.push(current)
                    break
                case TOKENS.STRING:
                    this.parseString(current);
                    break
                case NUMBERS.ONE:
                case NUMBERS.TWO:
                case NUMBERS.THREE:
                case NUMBERS.FOUR:
                case NUMBERS.FIVE:
                case NUMBERS.SIX:
                case NUMBERS.SEVEN:
                case NUMBERS.EIGHT:
                case NUMBERS.NINE:
                case NUMBERS.MINUS:
                    this.parseNumber(current)                        
    
                
                
            }
        }
    }

    private parseString(current: string): void {
        while (current != TOKENS.STRING) {
            this.pos++
            current = this.content[this.pos]
        }

        this.pos++
    }

    private parseNumber(current: string): void {
        while 
    }
}

const parser = new JSON_Parser();
parser.run(process.argv.splice(2))

