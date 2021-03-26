// 명령어 리스트 및 메세지
const { prefix } = require("../../config.json");

module.exports = {
   name: "help",
   description: "사용할 수 있는 명령어 리스트를 보여줍니다.",
   aliases: ["commands"],
   usage: "[command name]",
   cooldown: 5,
   execute(message, args) {
      const data = [];
      const { commands } = message.client;

      if (!args.length) {
         data.push("명령어 목록:");
         data.push(commands.map((command) => command.name).join(", "));
         data.push(`\n특정 명령어에 대한 정보를 얻으려면 다음과 같이 입력하세요. \`${prefix}help 명령어\``);

         return message.author
            .send(data, { split: true })
            .then(() => {
               if (message.channel.type === "dm") return;
               message.reply("명령어 리스트를 메세지로 보냈습니다.");
            })
            .catch((error) => {
               console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
               message.reply("메세지를 보낼 수 없습니다.");
            });
      }

      const name = args[0].toLowerCase();
      const command = commands.get(name) || commands.find((c) => c.aliases && c.aliases.includes(name));

      if (!command) {
         return message.reply("유효한 명령이 아닙니다.");
      }

      data.push(`**Name:** ${command.name}`);

      if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(", ")}`);
      if (command.description) data.push(`**Description:** ${command.description}`);
      if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

      data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

      message.channel.send(data, { split: true });
   },
};
