module.exports = {
   name: "event",
   description: "이벤트 채널 접속 정보",
   aliases: ["이벤트", "ev"],
   args: true,
   usage: "인원수(숫자)",
   cooldown: 1,
   // custom 818705115375992852
   // custom3 821288681657729045
   num: undefined,
   team: undefined,
   channel: "이벤트 대기방",
   execute(message, args) {
      let fromCh = "";
      const fromChannel = message.guild.channels.cache.filter((channel) => {
         if (channel.name == this.channel) {
            fromCh = channel.id;
         }
      });

      console.log(fromCh);

      const channelMembers = message.guild.channels.cache.get(fromCh).members.map((user) => {
         return user.nickname;
      });

      if (!channelMembers.length) {
         message.channel.send("이벤트 채널이 비어있습니다. 채널 이동 후 다시 실행해주세요.");

         this.num = undefined;
         this.team = undefined;
         return;
      }

      const command = args[0].toLowerCase();

      if (command === "이동" || command === "move") {
         if (this.num === undefined) {
            message.channel.send("인원에 맞게 팀을 나눠주세요.");
            return;
         }

         for (let i = 0; i < this.team.length; i++) {
            for (let s = 0; s < this.team[i].length; s++) {
               message.guild.members.cache.map((user) => {
                  if (user.nickname === this.team[i][s]) {
                     message.guild.members.cache
                        .get(user.user.id)
                        .voice.setChannel(message.guild.channels.cache.get("821288681657729045"));
                  }
               });
            }
         }

         this.num = undefined;
         this.team = undefined;

         return;
      }

      const eventMembers = channelMembers.sort(() => Math.random() - 0.5);

      Array.prototype.division = (n) => {
         const arr = eventMembers.map((user) => {
            return user;
         });
         const len = arr.length;
         const cnt = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
         let temp = [];
         this.num = n;

         for (let i = 0; i < cnt; i++) {
            temp.push(arr.splice(0, n));
         }

         return temp;
      };

      const divisionTeams = eventMembers.division(args);
      this.team = divisionTeams;
      let num = 0;

      message.channel.send(
         divisionTeams.map((name) => {
            num++;
            return `${num}팀 : ${name}`;
         })
      );
   },
};
