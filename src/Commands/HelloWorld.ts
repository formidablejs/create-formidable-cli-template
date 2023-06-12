import { Command, PropList, string } from '@formidablejs/console'

/**
 * This is a simple command that outputs a message to the terminal.
 * You can run this command by typing `./bin/dev hello` in your terminal.
 *
 * @class HelloWorld
 * @extends {Command}
 * @version 0.0.1
 */
export default class HelloWorld extends Command {
    get signature(): string {
        return 'hello {name}'
    }

    get description(): string {
        return 'Say hello to the world'
    }

    get props(): PropList {
        return {
            name: string('Your name').nullable()
        }
    }

    async handle(): Promise<void> {
        this.info('Hello ' + this.argument('name', 'World') + ' 👋')
    }
}
