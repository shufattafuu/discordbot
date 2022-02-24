class CommandParser {

	client = null;
	prefix = "";

	constructor(options){
		this.client = options.client;
		this.prefix = options.prefix;
	}

	async handleCommand(message){
		if(!message.author.bot && message.content.startsWith(this.prefix)) {
			
		}
	}
}
