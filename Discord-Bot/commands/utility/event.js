module.exports = {
   name: "event",
   description: "이벤트 매치를 생성합니다.",
   aliases: ["이벤트", "ev"],
   args: true,
   usage: "인원수(숫자)",
   cooldown: 1,
   num: undefined,
   team: undefined,
   baseChannel: "이벤트대기방",
   childChannel: ["custom1", "custom2", "custom3"],
   execute(message, args) {
      const command = args[0].toLowerCase();
      let baseChannel = "";
      let childChannel = [];

      if (command === "showchannel" || command === "채널" || command === "채널설정") {
         message.channel.send(`baseChannel = ${this.baseChannel} \nchildChannel = ${this.childChannel}`);
         return;
      }

      if (command === "base" || command === "대기실" || command === "베이스") {
         const baseName = args.filter((com) => {
            return com != command;
         });

         this.baseChannel = baseName.join("");
         message.channel.send(`${message.author} 이벤트 베이스 채널을 "${baseName.join("")}" (으)로 설정했습니다.`);
         return;
      }

      if (command === "child" || command === "팀채널" || command === "팀") {
         const childName = args.filter((com) => {
            return com != command;
         });

         this.childChannel = childName;
         childChannel = [];
         message.channel.send(`${message.author} 이벤트 팀 채널을 "${childName}" (으)로 설정했습니다.`);
         return;
      }

      if (!this.baseChannel || !this.childChannel) {
         message.channel.send(`${message.author} 이벤트 채널 설정이 필요합니다.`);
         return;
      }

      const baseCh = message.guild.channels.cache.map((channel) => {
         if (channel.name.replace(/(\s*)/g, "") === this.baseChannel.replace(/(\s*)/g, "")) {
            baseChannel = channel.id;
         }
      });

      const childCh = message.guild.channels.cache.filter((channel) => {
         for (let i = 0; i < this.childChannel.length; i++) {
            if (channel.name.replace(/(\s*)/g, "") === this.childChannel[i].replace(/(\s*)/g, "")) {
               childChannel.push(channel.id);
            }
         }
      });

      if (!message.guild.channels.cache.get(baseChannel)) {
         message.channel.send(`${message.author} 이벤트 채널 설정이 필요합니다.`);

         return;
      }

      if (command === "meet" || command === "모임" || command === "홈") {
         if (!this.team) {
            message.channel.send(`${message.author} 팀 분배 후 실행해주세요.`);
         } else {
            for (i = 0; i < this.team.length; i++) {
               for (s = 0; s < this.team[i].length; s++) {
                  message.guild.members.cache
                     .get(this.team[i][s].user.id)
                     .voice.setChannel(message.guild.channels.cache.get(baseChannel));
               }
            }
         }

         return;
      }

      const channelMembers = message.guild.channels.cache.get(baseChannel).members.map((user) => {
         return user;
      });

      if (!channelMembers.length && !this.team) {
         message.channel.send(`${message.author} 이벤트 베이스 채널이 비어있습니다. 채널 참여 후 다시 실행해주세요.`);
         return;
      }

      if (command === "이동" || command === "move") {
         if (this.num === undefined) {
            message.channel.send(`${message.author} 인원에 맞게 팀을 나눠주세요.`);
            return;
         }

         for (let i = 0; i < this.team.length; i++) {
            for (let s = 0; s < this.team[i].length; s++) {
               message.guild.members.cache.map((user) => {
                  if (user.user.username === this.team[i][s].user.username) {
                     message.guild.members.cache
                        .get(user.user.id)
                        .voice.setChannel(message.guild.channels.cache.get(childChannel[i]));
                  }
               });
            }
         }

         return;
      }

      if (command === "team" || command === "팀나누기" || command === "분배") {
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

               if (i + 2 === cnt) {
                  if (arr.length > 0 && arr.length < n) {
                     const num = arr.length;

                     for (let s = 0; s < num; s++) {
                        temp[s].push(arr.splice(0, n));
                     }
                  }
               }
            }

            return temp;
         };

         const divisionTeams = eventMembers.division(args[1]);
         this.team = divisionTeams;
         let num = 0;

         message.channel.send(
            divisionTeams.map((name) => {
               num++;
               return `${num}팀 : ${name}`;
            })
         );
      }
   },
};
