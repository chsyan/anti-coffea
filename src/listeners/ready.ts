import handleMember from "../handle-member";
import log from "../log";
import { Client } from "discord.js";

const ready = async (client: Client) => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      return;
    }
    log("Logged in as " + client.user.tag);

    const names: JSON = require('../../names.json');
    setInterval(async function () {
      // Interval handle member
      const memberManagers = client.guilds.cache.map(guild => guild.members);
      for (const memberManager of memberManagers) {
        for (const [key, _value] of Object.entries(names)) {
          try {
            const member = await memberManager.fetch(key);
            await handleMember(member);
          } catch (e: unknown) {
            if (e instanceof Error && e.message !== "Unknown Member") {
              log(e.message);
            }
          }
        }
      }
    }, (10000));
  });
};

export default ready;