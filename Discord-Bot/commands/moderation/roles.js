module.exports = {
   name: "roles",
   description: "사용자 권한을 설정합니다..",
   guildOnly: true,
   permissions: "MANAGE_ROLES",
   execute(message, args) {
      if (args[0] === "추가" || args[0] === "create") {
         const rolesArr = args.splice(0, 1);
         const name = args.splice(0, 1);

         // message.guild.roles.create({ data: { name: "kicker", permissions: ["KICK_MEMBERS"] } });
      }

      message.channel.send(`${args[0]} 에 다음 권한을 추가했습니다.`);
   },
};
