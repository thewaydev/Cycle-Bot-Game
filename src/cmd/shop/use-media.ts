import * as Discord from "discord.js";
import Big from "bignumber.js";
import { Command, Colors, Bot, Database, brackets, commanum } from "../../global.js";
import { socialMedia } from "../../util/data/social-media.js";

class C extends Command {
  names = ["advance-media", "use-media", "prestige", "next-media", "nm"];
  help = "Go to the next social media!";

  exec(msg: Discord.Message, _: string[], _1: Discord.Client) {
    msg.channel.send({
      embeds: [{
        color: Colors.WARNING,
        title: "Confirm Reset",
        description: "Are you sure you want to reset all your progress and go to the next social media?\nReact with ✅!"
      }]
    }).then(async mesg => {
      await mesg.react("✅");

      function filter(reaction: Discord.MessageReaction, user: Discord.User) {
        return reaction.emoji.name == "✅" && user.id == msg.author.id;
      }

      mesg.awaitReactions({ filter, max: 1, time: 60000, errors: ["time"] }).then(_ => {
        const user = Database.getUser(msg.author.id);
        const idx = user.socialMedia;
        const cyclesNeeded = new Big(100_000).pow(Math.ceil(Math.log(2 * (idx + 1))));
        const userCycles = new Big(user.cycles);

        if (userCycles.lt(cyclesNeeded)) {
          return Bot.errormsg(msg, `Not enough cycles!!
You need ${brackets(commanum(cyclesNeeded.minus(userCycles).toString()))} more cycles!`);
        }

        let sm = user.socialMedia + 1;
        const name = socialMedia[sm];
        if (sm >= socialMedia.length) sm = socialMedia.length - 1;

        Object.assign(user, {
          cycles: "0",
          text: "0",
          xp: "0",
          tpc: "1",
          cpp: "1",
          tpm: "0",
          bought: {
            idle: {},
            upgrades: {},
            cpp: {}
          },
          socialMedia: sm
        });

        msg.channel.send({
          embeds: [{
            color: Colors.SUCCESS,
            title: `You moved to ${brackets(name)}!`,
            description: `Your cycles, tpc, cpp, and tpm have been reset,
but now you get a base boost!`,
            footer: {
              text: "Use &prof to see more!"
            }
          }]
        });
      });
    });
  }
}

export const c = new C();