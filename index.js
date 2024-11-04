(async () => {
    // default imports
    const events = require('events');
    const {
        exec
    } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const akinator = require("discord.js-akinator");
    const os = require("os-utils");
    let URL = require('url')
    const ms = require("ms")
    let https = require("https")
    const miliConverter = require("millisecond-converter")
    const S4D_APP_write = require('write');
    var eventEmitter = new events.EventEmitter();
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');

    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire: null,
        joiningMember: null,
        reply: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
        let file = JSON.parse(fs.readFileSync('package.json'))
        file.dependencies['discord.js'] = '^13.16.0'
        fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
        exec('npm i')
        throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.16.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
        let file = JSON.parse(fs.readFileSync('package.json'))
        file.dependencies['discord-logs'] = '^2.0.0'
        fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
        exec('npm i')
        throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION",
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function(err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code


    // blockly code
    var arguments2, ischeckedserverparty, thechosenpartymember, prodapikey, qrapikey, command, prodowner, prod, link, announcement, partypath, partyleader, party, qrcodelogo, tag, partyleaderid, qrcodecolor, whoannounced, memberoptionuser, thefuckingscriptthing, hasnickname, partyshouldbedeleted, nowggbeforelobotomy, nowggafterlobotomy, partyid, partyvoice, partyinvite, partyleaderroleid, ngg_game, checksum, oldcheck, uploadscript, bufferedchecksum;

    function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }


    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'changepswrd') {
            prodapikey = (fs.readFileSync((['delinquents/', (interaction.member).id, '/prodapikey', '.txt'].join('')), 'utf8'));
            prodowner = (fs.readFileSync((['delinquents/', (interaction.member).id, '/prodowner', '.txt'].join('')), 'utf8'));
            https.get((['https://www.authpro.com/api2/update?user=', prodowner, '&api_key=', prodapikey, '&find_member_login=', fs.readFileSync((['delinquents/', (interaction.member).id, '/username', '.txt'].join('')), 'utf8'), '&password=', interaction.options.getString('password'), '&status=a'].join('')), async resp => {
                let data = Buffer.alloc(0);
                resp.on("data", async chunk => {
                    data = Buffer.concat([data, chunk]);
                });
                resp.on("end", async () => {
                    S4D_APP_write.sync(String((['delinquents/', (interaction.member).id, '/password', '.txt'].join(''))), String((interaction.options.getString('password'))), {
                        overwrite: true
                    });
                    await interaction.reply({
                        content: 'done!',
                        ephemeral: true,
                        components: []
                    });

                });
            })
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'newuser') {
            if (((interaction.member).id) == '863178429213179984') {
                prod = (interaction.options.getString('prod'));
                S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/prod', '.txt'].join(''))), String((interaction.options.getString('prod'))), {
                    overwrite: true
                });
                if (prod == 'prod1') {
                    prodapikey = 'unl4bn84nl3oly6k';
                    prodowner = 'frogiesarcade';
                    S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/prodapikey', '.txt'].join(''))), String(prodapikey), {
                        overwrite: true
                    });
                    S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/prodowner', '.txt'].join(''))), String(prodowner), {
                        overwrite: true
                    });
                } else if (prod == 'prod2') {
                    prodapikey = 'aouv70zp2r5gl1ya';
                    prodowner = 'frogiesarcade2';
                    S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/prodapikey', '.txt'].join(''))), String(prodapikey), {
                        overwrite: true
                    });
                    S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/prodowner', '.txt'].join(''))), String(prodowner), {
                        overwrite: true
                    });
                }
                S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/username', '.txt'].join(''))), String((interaction.options.getString('username'))), {
                    overwrite: true
                });
                S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/password', '.txt'].join(''))), String((interaction.options.getString('password'))), {
                    overwrite: true
                });
                https.get((['https://www.authpro.com/api2/create?user=', prodowner, '&api_key=', prodapikey, '&_login=', interaction.options.getString('username'), '&password=', interaction.options.getString('password')].join('')), async resp => {
                    let data = Buffer.alloc(0);
                    resp.on("data", async chunk => {
                        data = Buffer.concat([data, chunk]);
                    });
                    resp.on("end", async () => {
                        https.get((['https://www.authpro.com/api2/update?user=', prodowner, '&api_key=', prodapikey, '&find_member_login=', interaction.options.getString('username'), '&password=', interaction.options.getString('password')].join('')), async resp => {
                            let data = Buffer.alloc(0);
                            resp.on("data", async chunk => {
                                data = Buffer.concat([data, chunk]);
                            });
                            resp.on("end", async () => {
                                await interaction.reply({
                                    content: (['done!', '\n', 'username: ', interaction.options.getString('username'), '\n', 'password: ', interaction.options.getString('password'), '\n', 'this person\'s prod is set to be on ', prod].join('')),
                                    ephemeral: true,
                                    components: []
                                });

                            });
                        })

                    });
                })
            } else if (((interaction.member).id) != '863178429213179984') {
                await interaction.reply({
                    content: 'nah ima do my own thing',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'activate') {
            if (((interaction.member).id) == '863178429213179984') {
                prodapikey = (fs.readFileSync((['delinquents/', (interaction.options.getMember('user')).id, '/prodapikey', '.txt'].join('')), 'utf8'));
                prodowner = (fs.readFileSync((['delinquents/', (interaction.options.getMember('user')).id, '/prodowner', '.txt'].join('')), 'utf8'));
                https.get((['https://www.authpro.com/api2/update?user=', prodowner, '&api_key=', prodapikey, '&find_member_login=', fs.readFileSync((['delinquents/', (interaction.options.getMember('user')).id, '/username', '.txt'].join('')), 'utf8'), '&password=', fs.readFileSync((['delinquents/', (interaction.options.getMember('user')).id, '/password', '.txt'].join('')), 'utf8'), '&status=a'].join('')), async resp => {
                    let data = Buffer.alloc(0);
                    resp.on("data", async chunk => {
                        data = Buffer.concat([data, chunk]);
                    });
                    resp.on("end", async () => {
                        await interaction.reply({
                            content: 'done!',
                            ephemeral: true,
                            components: []
                        });

                    });
                })
            } else if (((interaction.member).id) != '863178429213179984') {
                await interaction.reply({
                    content: 'nah ima do my own thing',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'suspend') {
            if (((interaction.member).id) == '863178429213179984') {
                prodapikey = (fs.readFileSync((['delinquents/', (interaction.options.getMember('user')).id, '/prodapikey', '.txt'].join('')), 'utf8'));
                prodowner = (fs.readFileSync((['delinquents/', (interaction.options.getMember('user')).id, '/prodowner', '.txt'].join('')), 'utf8'));
                https.get((['https://www.authpro.com/api2/update?user=', prodowner, '&api_key=', prodapikey, '&find_member_login=', fs.readFileSync((['delinquents/', (interaction.options.getMember('user')).id, '/username', '.txt'].join('')), 'utf8'), '&password=', 'suspended' + String(mathRandomInt(1, 100000000000000000000)), '&status=s'].join('')), async resp => {
                    let data = Buffer.alloc(0);
                    resp.on("data", async chunk => {
                        data = Buffer.concat([data, chunk]);
                    });
                    resp.on("end", async () => {
                        await interaction.reply({
                            content: 'done!',
                            ephemeral: true,
                            components: []
                        });

                    });
                })
            } else if (((interaction.member).id) != '863178429213179984') {
                await interaction.reply({
                    content: 'nah ima do my own thing',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'whitelist') {
            if (((interaction.member).id) == '863178429213179984') {
                S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/allowed', '.txt'].join(''))), String('true'), {
                    overwrite: true
                });
                S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/tag', '.txt'].join(''))), String((interaction.options.getString('tag'))), {
                    overwrite: true
                });
                await interaction.reply({
                    content: 'done!',
                    ephemeral: true,
                    components: []
                });
                (interaction.channel).send({
                    content: String((['<@', (interaction.options.getMember('user')).id, '> you have been whitelisted! with the tag: ', interaction.options.getString('tag'), '. run /announce and then your message and it should be announced on frogie\'s arcade! if you wanna test the command you can use https://buyteachinglessons.global.ssl.fastly.net/ as a way to test the command.'].join('')))
                });
            } else if (((interaction.member).id) != '863178429213179984') {
                await interaction.reply({
                    content: 'nuh uh',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'qrcode-make') {
            qrapikey = 'm5IVsatBBYLw1-44jODNA-b6tY3a-9eFLZl04xq3h1H0xBBqVBdmDIWK4aiA8zq9';
            link = (interaction.options.getString('link'));
            qrcodelogo = (interaction.options.getString('qrcode-logo'));
            qrcodecolor = (interaction.options.getString('dots-color'));
            https.get((['https://api.qr-code-generator.com/v1/create?access-token=', qrapikey, '&qr_code_text=', link, '&qr_code_logo=', qrcodelogo, '&foreground_color=', qrcodecolor].join('')), async resp => {
                let data = Buffer.alloc(0);
                resp.on("data", async chunk => {
                    data = Buffer.concat([data, chunk]);
                });
                resp.on("end", async () => {
                    if ((String((String(data))).includes(String('Foreground Color is invalid.'))) || (String((String(data))).includes(String('Foreground Color should contain at most 7 characters.')))) {
                        await interaction.reply({
                            content: 'not a proper color!',
                            ephemeral: true,
                            components: []
                        });
                    } else {
                        await interaction.reply({
                            content: (['https://api.qr-code-generator.com/v1/create?access-token=', qrapikey, '&qr_code_text=', link, '&qr_code_logo=', qrcodelogo, '&image_format=PNG', '&image_width=1000', ''].join('')),
                            ephemeral: true,
                            components: []
                        });
                    }

                });
            })
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'kickmember') {
            if ((interaction.guild) == party) {
                if (((interaction.member).id) == partyleaderid) {
                    await interaction.reply({
                        content: 'done!',
                        ephemeral: true,
                        components: []
                    });
                    party.members.kick((interaction.options.getMember('user')), {
                        reason: String('kicked by party leader')
                    })
                } else if (((interaction.member).id) != partyleaderid) {
                    await interaction.reply({
                        content: 'totally done!',
                        ephemeral: true,
                        components: []
                    });
                }
            } else if ((interaction.guild) != party) {
                await interaction.reply({
                    content: 'not a party stupid',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    synchronizeSlashCommands(s4d.client, [{
        name: 'createparty',
        description: 'creates a party server with a voice channel (slash command to make the invites only visible to you)',
        options: [

        ]
    }, {
        name: 'deleteparty',
        description: 'deletes a party you made. (party leader only)',
        options: [

        ]
    }, {
        name: 'kickmember',
        description: 'kicks a member from your party (party leader only)',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'kicks a member from your party (party leader only)',
            choices: [

            ]
        }, ]
    }, {
        name: 'whitelist',
        description: 'for /announce (frogiee1 only)',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'obvious (frogiee1 only)',
            choices: [

            ]
        }, {
            type: 3,
            name: 'tag',
            required: true,
            description: 'obvious (frogiee1 only)',
            choices: [{
                name: String('owner'),
                value: String('[OWNER]')
            }, {
                name: String('friend'),
                value: String('[FRIEND]')
            }, {
                name: String('whitelisted'),
                value: String('[WHITELISTED MF]')
            }, {
                name: String('retard'),
                value: String('[RETARD]')
            }, ]
        }, ]
    }, {
        name: 'unwhitelist',
        description: 'obvious (frogiee1 only)',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'obvious (frogiee1 only)',
            choices: [

            ]
        }, ]
    }, {
        name: 'mutemember',
        description: 'mutes a member in your party (party leader only)',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'mutes a member in your party (party leader only)',
            choices: [

            ]
        }, ]
    }, {
        name: 'unmutemember',
        description: 'un-mutes a member in your party (party leader only)',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'un-mutes a member in your party (party leader only)',
            choices: [

            ]
        }, ]
    }, {
        name: 'undeafenmember',
        description: 'un-deafens a member in your party (party leader only)',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'un-deafens a member in your party (party leader only)',
            choices: [

            ]
        }, ]
    }, {
        name: 'helenkeller',
        description: 'makes a member become helen keller (mute and deafens, party leader only)',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'makes a member become helen keller (mute and deafens, party leader only)',
            choices: [

            ]
        }, ]
    }, {
        name: 'announce',
        description: 'announces something to all frogie\'s arcade users (must be in allowed list)',
        options: [{
            type: 3,
            name: 'message',
            required: true,
            description: 'announces something to all frogie\'s arcade users (must be in allowed list)',
            choices: [

            ]
        }, ]
    }, {
        name: 'updateglobal',
        description: 'tells every user to refresh their page for a new update on frogie\'s arcade',
        options: [

        ]
    }, {
        name: 'nggfixedglobal',
        description: 'tells every user that now.gg was fixed',
        options: [

        ]
    }, {
        name: 'qrcode-make',
        description: 'what do you think',
        options: [{
            type: 3,
            name: 'link',
            required: true,
            description: 'what the sigma',
            choices: [

            ]
        }, {
            type: 3,
            name: 'qrcode-logo',
            required: true,
            description: 'DiscordAPIError',
            choices: [{
                name: String('no logo'),
                value: String('no-logo')
            }, {
                name: String('scan me'),
                value: String('scan-me')
            }, {
                name: String('scan me square'),
                value: String('scan-me-square')
            }, ]
        }, ]
    }, {
        name: 'suspend',
        description: 'ban a user from all frogie\'s arcade premium links',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'sigma',
            choices: [

            ]
        }, ]
    }, {
        name: 'activate',
        description: 'unban a user from all frogie\'s arcade premium links',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'sigma',
            choices: [

            ]
        }, ]
    }, {
        name: 'newuser',
        description: 'make a user for all frogie\'s arcade premium links',
        options: [{
            type: 6,
            name: 'user',
            required: true,
            description: 'sigma',
            choices: [

            ]
        }, {
            type: 3,
            name: 'username',
            required: true,
            description: 'sigma',
            choices: [

            ]
        }, {
            type: 3,
            name: 'password',
            required: true,
            description: 'sigma',
            choices: [

            ]
        }, {
            type: 3,
            name: 'prod',
            required: true,
            description: 'sigma',
            choices: [{
                name: String('prod 1'),
                value: String('prod1')
            }, {
                name: String('prod 2'),
                value: String('prod2')
            }, ]
        }, ]
    }, {
        name: 'changepswrd',
        description: '(only for content creators) changes your password for premium links',
        options: [{
            type: 3,
            name: 'password',
            required: true,
            description: 'sigma',
            choices: [

            ]
        }, ]
    }, ], {
        debug: false,

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'updateglobal') {
            if (((interaction.member).id) == '863178429213179984') {
                https.get('https://api.announcements.yourmom.eu.org/api/announce?key=018f26d9-f62f-7e77-b22b-9cd0d22a0b8c&message=%E2%9A%A0%EF%B8%8FUPDATE:%20Refresh%20your%20page%20to%20update%20frogie%27s%20arcade!%E2%9A%A0%EF%B8%8F', async resp => {
                    let data = Buffer.alloc(0);
                    resp.on("data", async chunk => {
                        data = Buffer.concat([data, chunk]);
                    });
                    resp.on("end", async () => {
                        await interaction.reply({
                            content: 'sent!',
                            ephemeral: true,
                            components: []
                        });

                    });
                })
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'unwhitelist') {
            if (((interaction.member).id) == '863178429213179984') {
                S4D_APP_write.sync(String((['delinquents/', (interaction.options.getMember('user')).id, '/allowed', '.txt'].join(''))), String('false'), {
                    overwrite: true
                });
                await interaction.reply({
                    content: 'done!',
                    ephemeral: true,
                    components: []
                });
            } else if (((interaction.member).id) != '863178429213179984') {
                await interaction.reply({
                    content: 'nuh uh',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'announce') {
            if ((fs.readFileSync((['delinquents/', (interaction.member).id, '/allowed', '.txt'].join('')), 'utf8')) == 'true') {
                announcement = String(String((interaction.options.getString('message'))).replaceAll(' ', String('%20'))) + '';
                tag = (fs.readFileSync((['delinquents/', (interaction.member).id, '/tag', '.txt'].join('')), 'utf8'));
                whoannounced = [tag, ' ', (interaction.member).nickname == null ? (interaction.member).user.username : (interaction.member).nickname].join('');
                if ((interaction.member).nickname != null) {
                    hasnickname = '[NICKNAME] ' + String(whoannounced);
                } else {
                    hasnickname = whoannounced;
                }
                S4D_APP_write.sync(String('message.txt'), String((['https://api.announcements.yourmom.eu.org/api/announce', '?key=018f26d9-f62f-7e77-b22b-9cd0d22a0b8c&message=', 'global announcement from ', hasnickname, ': ', announcement].join(''))), {
                    overwrite: true
                });
                https.get((fs.readFileSync('message.txt', 'utf8')), async resp => {
                    let data = Buffer.alloc(0);
                    resp.on("data", async chunk => {
                        data = Buffer.concat([data, chunk]);
                    });
                    resp.on("end", async () => {
                        await interaction.reply({
                            content: 'done!',
                            ephemeral: true,
                            components: []
                        });

                    });
                })
                await delay(Number(1) * 1000);
                fs.unlinkSync('message.txt', async function(err) {

                });
            } else if ((fs.readFileSync((['delinquents/', (interaction.member).id, '/allowed', '.txt'].join('')), 'utf8')) != 'true') {
                await interaction.reply({
                    content: 'exists, but not allowed',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        arguments2 = (s4dmessage.content).split(' ');
        command = arguments2.splice(0, 1)[0];
        if (((command.toLowerCase()) || '').startsWith('!!deepfry' || '')) {
            if ((s4dmessage).attachments != null && (s4dmessage).attachments.size > 0) {
                var loadingattachment = new Discord.MessageEmbed();
                loadingattachment.setColor('#66ff99');
                loadingattachment.setTitle(String('loading your attachment...'))
                loadingattachment.setURL(String());
                loadingattachment.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                    format: "png"
                }))), String());
                loadingattachment.setFooter({
                    text: String('this is mandatory for it to work'),
                    iconURL: String()
                });
                s4dmessage.reply({
                    embeds: [loadingattachment],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(1.5) * 1000);
                    var deepfryattachment = new Discord.MessageEmbed();
                    deepfryattachment.setColor('#66ff99');
                    deepfryattachment.setTitle(String((['Deepfried your image!', '\n', 'NOTE: bigger images take longer to load.'].join(''))))
                    deepfryattachment.setURL(String());
                    deepfryattachment.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    deepfryattachment.setImage(String(('https://poopoo-api.vercel.app/api/deepfry?url=' + String(((s4dmessage).attachments.at(Number(1) - 1)).url))));
                    deepfryattachment.setFooter({
                        text: String('the image above is not promoted or endorsed - frogie\'s arcade bot v2'),
                        iconURL: String()
                    });
                    s4dfrost_real_reply.edit({
                        embeds: [deepfryattachment]
                    });


                });

            } else {
                var embed = new Discord.MessageEmbed()
                embed.setTitle((['Deepfried your image!', '\n', 'NOTE: bigger images take longer to load.'].join('')));
                embed.setAuthor((s4dmessage.member.user.username), ((s4dmessage.author).displayAvatarURL({
                    format: "png"
                })));
                embed.setImage(('https://poopoo-api.vercel.app/api/deepfry?url=' + String(arguments2.join(' '))));
                embed.setColor('#66ff99');
                embed.setFooter('the image above is not promoted or endorsed - frogie\'s arcade bot v2', );
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        if (((s4dmessage.channel).id) == '1230989586042196078') {
            if (String(((s4dmessage.content).toLowerCase())).includes(String('https://'))) {
                try {
                    https.get((String(s4dmessage.content) + ''), async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            if (String((String(data))).includes(String('/images/logo.gif'))) {
                                https.get((String(s4dmessage.content) + '/forigesarcade.txt'), async resp => {
                                    let data = Buffer.alloc(0);
                                    resp.on("data", async chunk => {
                                        data = Buffer.concat([data, chunk]);
                                    });
                                    resp.on("end", async () => {
                                        if (String((String(data))).includes(String('skibidi'))) {} else {
                                            s4dmessage.delete();
                                            (s4dmessage.channel).sendTyping();
                                            await delay(Number(2) * 1000);
                                            var nofrogiesarcade = new Discord.MessageEmbed();
                                            nofrogiesarcade.setTitle(String('invalid link!'))
                                            nofrogiesarcade.setURL(String());
                                            nofrogiesarcade.setColor('#ff0000');
                                            nofrogiesarcade.setDescription(String('please send a valid frogie\'s arcade link! if the link you sent is a frogie\'s arcade link make it have https:// infront and have it be located at the home page. (ex. https://yourfrogiesarcadelink.com/)'));
                                            s4dmessage.channel.send({
                                                embeds: [nofrogiesarcade]
                                            }).then(async (s4dreply) => {
                                                await delay(Number(5) * 1000);
                                                s4dreply.delete();

                                            });

                                        }

                                    });
                                })
                            } else {
                                s4dmessage.delete();
                                (s4dmessage.channel).sendTyping();
                                await delay(Number(2) * 1000);
                                var nofrogiesarcade = new Discord.MessageEmbed();
                                nofrogiesarcade.setTitle(String('invalid link!'))
                                nofrogiesarcade.setURL(String());
                                nofrogiesarcade.setColor('#ff0000');
                                nofrogiesarcade.setDescription(String('please send a valid frogie\'s arcade link! if the link you sent is a frogie\'s arcade link make it have https:// infront and have it be located at the home page. (ex. https://yourfrogiesarcadelink.com/)'));
                                s4dmessage.channel.send({
                                    embeds: [nofrogiesarcade]
                                }).then(async (s4dreply) => {
                                    await delay(Number(5) * 1000);
                                    s4dreply.delete();

                                });

                            }

                        });
                    })

                } catch (err) {
                    s4dmessage.delete();
                    (s4dmessage.channel).sendTyping();
                    await delay(Number(2) * 1000);
                    var nofrogiesarcade = new Discord.MessageEmbed();
                    nofrogiesarcade.setTitle(String('invalid link!'))
                    nofrogiesarcade.setURL(String());
                    nofrogiesarcade.setColor('#ff0000');
                    nofrogiesarcade.setDescription(String('please send a valid frogie\'s arcade link! if the link you sent is a frogie\'s arcade link make it have https:// infront and have it be located at the home page. (ex. https://yourfrogiesarcadelink.com/)'));
                    s4dmessage.channel.send({
                        embeds: [nofrogiesarcade]
                    }).then(async (s4dreply) => {
                        await delay(Number(5) * 1000);
                        s4dreply.delete();

                    });


                }
            } else {
                s4dmessage.delete();
                (s4dmessage.channel).sendTyping();
                await delay(Number(2) * 1000);
                var nofrogiesarcade = new Discord.MessageEmbed();
                nofrogiesarcade.setTitle(String('not a link!'))
                nofrogiesarcade.setURL(String());
                nofrogiesarcade.setColor('#ff0000');
                nofrogiesarcade.setDescription(String('please send a valid frogie\'s arcade link! if the link you sent is a frogie\'s arcade link make it have https:// infront and have it be located at the home page. (ex. https://yourfrogiesarcadelink.com/)'));
                s4dmessage.channel.send({
                    embeds: [nofrogiesarcade]
                }).then(async (s4dreply) => {
                    await delay(Number(5) * 1000);
                    s4dreply.delete();

                });

            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        arguments2 = (s4dmessage.content).split(' ');
        command = arguments2.splice(0, 1)[0];
        if (((command.toLowerCase()) || '').startsWith('!!add-gun' || '')) {
            if ((s4dmessage).attachments != null && (s4dmessage).attachments.size > 0) {
                var loadingattachment = new Discord.MessageEmbed();
                loadingattachment.setColor('#66ff99');
                loadingattachment.setTitle(String('loading your attachment...'))
                loadingattachment.setURL(String());
                loadingattachment.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                    format: "png"
                }))), String());
                loadingattachment.setFooter({
                    text: String('this is mandatory for it to work'),
                    iconURL: String()
                });
                s4dmessage.reply({
                    embeds: [loadingattachment],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(1.5) * 1000);
                    var addguntoattachment = new Discord.MessageEmbed();
                    addguntoattachment.setColor('#66ff99');
                    addguntoattachment.setTitle(String('Added a gun to your image!'))
                    addguntoattachment.setURL(String());
                    addguntoattachment.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    addguntoattachment.setImage(String(('https://poopoo-api.vercel.app/api/gun?url=' + String(((s4dmessage).attachments.at(Number(1) - 1)).url))));
                    addguntoattachment.setFooter({
                        text: String('the image above is not promoted or endorsed - frogie\'s arcade bot v2'),
                        iconURL: String()
                    });
                    s4dfrost_real_reply.edit({
                        embeds: [addguntoattachment]
                    });


                });

            } else {
                var embed = new Discord.MessageEmbed()
                embed.setTitle(('Added a gun to your image!' + ''));
                embed.setAuthor((s4dmessage.member.user.username), ((s4dmessage.author).displayAvatarURL({
                    format: "png"
                })));
                embed.setImage(('https://poopoo-api.vercel.app/api/gun?url=' + String(arguments2.join(' '))));
                embed.setColor('#66ff99');
                embed.setFooter('the image above is not promoted or endorsed - frogie\'s arcade bot v2', );
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'deleteparty') {
            ischeckedserverparty = (fs.readFileSync((['party/', (interaction.guild).id, '//isitreallyaparty.txt'].join('')), 'utf8'));
            partypath = ['party/', (interaction.guild).id, '/'].join('');
            if (ischeckedserverparty == 'true') {
                if (((interaction.member).id) == (fs.readFileSync((['party/', (interaction.guild).id, '//partyleaderid.txt'].join('')), 'utf8'))) {
                    await interaction.reply({
                        content: 'done!',
                        ephemeral: true,
                        components: []
                    });
                    partyshouldbedeleted = true;
                    exec((['rmdir /s /q', partypath, '', '/'].join('')));
                    await delay(Number(1) * 1000);
                    (interaction.guild).delete()
                } else {
                    await interaction.reply({
                        content: 'totally done!',
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                await interaction.reply({
                    content: 'not a party stupid',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'mutemember') {
            if ((interaction.guild) == party) {
                if (((interaction.member).id) == partyleaderid) {
                    await interaction.reply({
                        content: 'done!',
                        ephemeral: true,
                        components: []
                    });
                    memberoptionuser = (interaction.options.getMember('user'));

                    s4dmessage.channel.members.forEach(member => {
                        if (member.id === ((interaction.options.getMember('user')).id)) {
                            member.voice.setMute(true)
                        }
                    });
                } else {
                    await interaction.reply({
                        content: 'totally done!',
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                await interaction.reply({
                    content: 'not a party stupid',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        arguments2 = (s4dmessage.content).split(' ');
        command = arguments2.splice(0, 1)[0];
        if (((command.toLowerCase()) || '').startsWith('!!webshot' || '')) {
            if (!((((arguments2.join(' ')) || '').startsWith('https://' || '')) || (((arguments2.join(' ')) || '').startsWith('http://' || '')))) {
                let webshoterror = new MessageEmbed()
                webshoterror.setTitle('Error!');
                webshoterror.setColor('#ff0000');
                webshoterror.setDescription('error with !!webshot');
                webshoterror.addField('details:', 'you didnt put https:// or http:// infront of your link!', false);
                webshoterror.setFooter('more will be added soon - frogie\'s arcade bot v2');
                s4dmessage.channel.send({
                    embeds: [webshoterror]
                });
            } else {
                var embed = new Discord.MessageEmbed()
                embed.setTitle(('WebShot of ' + String(arguments2.join(' '))));
                embed.setAuthor((s4dmessage.member.user.username), ((s4dmessage.author).displayAvatarURL({
                    format: "png"
                })));
                embed.setImage(('https://api.apiflash.com/v1/urltoimage?access_key=79bfa39c40694d4aba0692a5d3a76406&wait_until=page_loaded&url=' + String(arguments2.join(' '))));
                embed.setColor('#66ff99');
                embed.setFooter('the image above is not promoted or endorsed - frogie\'s arcade bot v2', );
                (s4dmessage.channel).send({
                    embeds: [embed]
                });

            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'deafenmember') {
            if ((interaction.guild) == party) {
                if (((interaction.member).id) == partyleaderid) {
                    await interaction.reply({
                        content: 'done!',
                        ephemeral: true,
                        components: []
                    });
                    memberoptionuser = (interaction.options.getMember('user'));

                    s4dmessage.channel.members.forEach(member => {
                        if (member.id === (memberoptionuser.id)) {
                            member.voice.setDeaf(true)
                        }
                    });
                } else {
                    await interaction.reply({
                        content: 'totally done!',
                        ephemeral: true,
                        components: []
                    });
                }
            } else {
                await interaction.reply({
                    content: 'not a party stupid',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('ready', async () => {
        var bot_startup = new Discord.MessageEmbed();
        bot_startup.setTitle(String(('Bot started on ' + String(String(s4d.client.readyAt)))))
        bot_startup.setURL(String());
        s4d.client.channels.cache.get('1060668231330836561').send({
            embeds: [bot_startup]
        });


        while (s4d.client && s4d.client.token) {
            await delay(50);
            s4d.client.user.setPresence({
                status: "dnd",
                activities: [{
                    name: 'on frogie\'s arcade',
                    type: "PLAYING"
                }]
            });
            await delay(Number(5) * 1000);
            s4d.client.user.setPresence({
                status: "dnd",
                activities: [{
                    name: 'roblox unblocked',
                    type: "PLAYING"
                }]
            });
            await delay(Number(5) * 1000);
            s4d.client.user.setPresence({
                status: "idle",
                activities: [{
                    name: 'a sleeping competition',
                    type: "COMPETING"
                }]
            });
            await delay(Number(5) * 1000);
            s4d.client.user.setPresence({
                status: "online",
                activities: [{
                    name: '#general',
                    type: "WATCHING"
                }]
            });
            await delay(Number(5) * 1000);
            s4d.client.user.setPresence({
                status: "online",
                activities: [{
                    name: '#site-chat',
                    type: "WATCHING"
                }]
            });
            await delay(Number(5) * 1000);
            s4d.client.user.setPresence({
                status: "dnd",
                activities: [{
                    name: 'you sleep',
                    type: "WATCHING"
                }]
            });
            await delay(Number(5) * 1000);
            s4d.client.user.setActivity('nuclear launch codes', {
                type: "STREAMING",
                url: 'https://www.youtube.com/watch?v=mrThFRR3n8A'
            });
            await delay(Number(5) * 1000);
            s4d.client.user.setActivity('roblox fixing 😨', {
                type: "STREAMING",
                url: 'https://www.youtube.com/watch?v=mrThFRR3n8A'
            });
            await delay(Number(5) * 1000);

            console.log('ran')
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        if ((s4dmessage.channel) == s4d.client.channels.cache.get('987046441799266424')) {
            s4dmessage.react('✅');
            await delay(Number(1) * 1000);
            s4dmessage.react('❌');
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'helenkeller') {
            ischeckedserverparty = (fs.readFileSync((['party/', (interaction.guild).id, '//isitreallyaparty.txt'].join('')), 'utf8'));
            if (ischeckedserverparty == 'true') {
                if (((interaction.member).id) == (fs.readFileSync((['party/', (interaction.guild).id, '//partyleaderid.txt'].join('')), 'utf8'))) {
                    await interaction.reply({
                        content: 'done!',
                        ephemeral: true,
                        components: []
                    });
                    memberoptionuser = (interaction.options.getMember('user'));

                    s4dmessage.channel.members.forEach(member => {
                        if (member.id === (memberoptionuser.id)) {
                            member.voice.setDeaf(true)
                        }
                    });
                    s4dmessage.channel.members.forEach(member => {
                        if (member.id === (memberoptionuser.id)) {
                            member.voice.setMute(true)
                        }
                    });
                } else if (((interaction.member).id) != (fs.readFileSync((['party/', (interaction.guild).id, '//partyleaderid.txt'].join('')), 'utf8'))) {
                    await interaction.reply({
                        content: 'totally done!',
                        ephemeral: true,
                        components: []
                    });
                }
            } else if (ischeckedserverparty != 'true') {
                await interaction.reply({
                    content: 'not a party stupid',
                    ephemeral: true,
                    components: []
                });
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((((s4dmessage.content).toLowerCase()) || '').startsWith('!!restart' || '')) {
            if (((s4dmessage.author).id) == '863178429213179984') {
                var restart = new Discord.MessageEmbed();
                restart.setTitle(String('bot has restarted!'))
                restart.setURL(String());
                restart.setColor('#66ff99');
                s4dmessage.reply({
                    embeds: [restart],
                    allowedMentions: {
                        repliedUser: true
                    }
                });
                exec('start restart.bat');

            } else {
                var nuhuh = new Discord.MessageEmbed();
                nuhuh.setTitle(String('error with !!restart'))
                nuhuh.setURL(String());
                nuhuh.setColor('#ff0000');
                nuhuh.addField(String('details:'), String('nuh uh'), false);
                s4dmessage.reply({
                    embeds: [nuhuh],
                    allowedMentions: {
                        repliedUser: true
                    }
                });

            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((((s4dmessage.content).toLowerCase()) || '').startsWith('!!akinator character' || '')) {
            if ((s4dmessage.author).bot) {
                let akinatorbot1 = new MessageEmbed()
                akinatorbot1.setTitle('Error!');
                akinatorbot1.setColor('#ff0000');
                akinatorbot1.setDescription('error with !!akinator');
                akinatorbot1.addField('details:', 'you cannot play on site chat or as a bot!', false);
                akinatorbot1.setFooter('more will be added soon - frogie\'s arcade bot v2');
                s4dmessage.channel.send({
                    embeds: [akinatorbot1]
                });
            } else {
                akinator(s4dmessage, {
                    language: "en",
                    childMode: true,
                    gameType: ('character'),
                    useButtons: true
                })
            }
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        arguments2 = (s4dmessage.content).split(' ');
        command = arguments2.splice(0, 1)[0];
        if (((command.toLowerCase()) || '').startsWith('!!fix-nowgg' || '')) {
            if (((s4dmessage.author).id) == '863178429213179984') {
                https.get('https://api.announcements.yourmom.eu.org/api/announce?key=018f26d9-f62f-7e77-b22b-9cd0d22a0b8c&message=%E2%9A%A0%EF%B8%8FALERT:%20nowgg%20bypass%20command%20has%20been%20executed!%20please%20be%20patient,%20updates%20will%20be%20posted%E2%9A%A0%EF%B8%8F&', async resp => {
                    let data = Buffer.alloc(0);
                    resp.on("data", async chunk => {
                        data = Buffer.concat([data, chunk]);
                    });
                    resp.on("end", async () => {

                    });
                })
                thefuckingscriptthing = `<script>
              // fullscreen string thing injector
              (function() {
                      const urlParams = new URLSearchParams(window.location.search);
                      if (!urlParams.has('ng_ifp_partner')) {
                          urlParams.set('ng_ifp_partner', 'skool');
                          const newUrl = window.location.pathname + '?' + urlParams.toString();
                          window.history.replaceState(null, '', newUrl);
                      }
              })();
          // edging master real
              alert('ngg bypass by frogiesarcade.win')
                                          if(window.location.hostname === "nowgg.lol"){
                                            alert("you are running nowgg.lol instead of the traditional links! this is not recommended as it could lead to some filters blocking access to the site! we recommend Ultraviolet as the proxy to use on this site, if you cant get access to an ultraviolet link use rhodium.")
                                          }
                                          else{
                                            console.log("we are chilling, running on " + window.location.host)
                                          }
                      setTimeout(function() {
                              if (document.getElementById('ng-logo')){
                                  proxyrefresh()
                              }
                          }, 2000);
              // the popup thing
              function proxyrefresh() {
                  var popup = document.createElement('div');
                  popup.innerText = 'ngg detected proxy or your first load, refreshing';
                  popup.style.position = 'fixed';
                  popup.style.top = '0';
                  popup.style.left = '0';
                  popup.style.width = '100%';
                  popup.style.height = '100%';
                  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                  popup.style.color = 'white';
                  popup.style.display = 'flex';
                  popup.style.justifyContent = 'center';
                  popup.style.backdropFilter = 'blur(20px)';
                  popup.style.alignItems = 'center';
                  popup.style.fontSize = '2em';
                  popup.style.zIndex = '9999';
                  popup.style.opacity = '0';
                  popup.style.transition = 'all 0.3s ease';
                  popup.style.fontFamily = 'Clash Display Semibold';
    
                  document.body.appendChild(popup);
    
                  setTimeout(function() {
                      popup.style.opacity = '1';
                      setTimeout(function() {
                              window.location.href = window.location.href + '?utm_source=now.gg-partner&utm_medium=bot&utm_campaign=carl';
                          }, 500);
                  }, 100);
              }
                              setInterval(function() {
                                if (document.getElementsByClassName("sc-69333f43-19 cIaYNi")[0].innerText === "Unofficial proxy detected!"){
                                console.error("NO")
                                  proxyrefresh();
                                }
                        }, 1000);
              // gtag injection
              window.addEventListener('DOMContentLoaded', (event) => {
                      const script1 = document.createElement('script');
                      script1.async = true;
                      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-GZ7K0FK3LT';
    
                      const script2 = document.createElement('script');
                      script2.innerHTML = \`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-GZ7K0FK3LT');
                      \`;
    
                      document.head.appendChild(script1);
                      document.head.appendChild(script2);
              });
                          </script>
    
                          <link href="/font" rel="stylesheet">`;
                nowggbeforelobotomy = '{"enableDisplayAds":true,"enablePrerollAds":true,"enableMidrollAds":true},"mobile":{"enableDisplayAds":true,"enablePrerollAds":true,"enableMidrollAds":true}},"tryAndDownload":';
                nowggafterlobotomy = '{"enableDisplayAds":false,"enablePrerollAds":false,"enableMidrollAds":false},"mobile":{"enableDisplayAds":false,"enablePrerollAds":false,"enableMidrollAds":false}},"tryAndDownload":';
                var nowggfix0 = new Discord.MessageEmbed();
                nowggfix0.setColor('#66ff99');
                nowggfix0.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                nowggfix0.setURL(String());
                nowggfix0.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                    format: "png"
                }))), String());
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Roblox'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Cod'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Stumble Guys'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Melon Playground'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Rocket League'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Android'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> FIFA: Moblie'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Pixel Gun 3D'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                nowggfix0.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                s4dmessage.reply({
                    embeds: [nowggfix0],
                    allowedMentions: {
                        repliedUser: true
                    }
                }).then(async (s4dfrost_real_reply) => {
                    await delay(Number(1.5) * 1000);
                    https.get('https://educationbluesky.com/', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll('{"enableDisplayAds":true,"enablePrerollAds":true,"enableMidrollAds":true},"mobile":{"enableDisplayAds":true,"enablePrerollAds":true,"enableMidrollAds":true}},"tryAndDownload":', String('{"enableDisplayAds":false,"enablePrerollAds":false,"enableMidrollAds":false},"mobile":{"enableDisplayAds":false,"enablePrerollAds":false,"enableMidrollAds":false}},"tryAndDownload":')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.roblox.client/launch-video/desktop/roblox.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.roblox.client/launch-video/mobile/roblox.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff\\index.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff\\index.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    var nowggfix1 = new Discord.MessageEmbed();
                    nowggfix1.setColor('#66ff99');
                    nowggfix1.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix1.setURL(String());
                    nowggfix1.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix1.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Cod'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Stumble Guys'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Melon Playground'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Rocket League'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Android'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> FIFA: Moblie'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Pixel Gun 3D'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix1.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix1]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix2 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/a/10008/b', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.activision.callofduty.shooter/launch-video/desktop/call-of-duty.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.activision.callofduty.shooter/launch-video/mobile/call-of-duty.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff\\apps\\activision-publishing-inc\\7935\\call-of-duty.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff\\apps\\activision-publishing-inc\\7935\\call-of-duty.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix2.setColor('#66ff99');
                    nowggfix2.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix2.setURL(String());
                    nowggfix2.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix2.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix2.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Stumble Guys'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Melon Playground'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Rocket League'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Android'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> FIFA: Moblie'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Pixel Gun 3D'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix2.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix2]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix3 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/a/10011/b', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.kitkagames.fallbuddies/launch-video/desktop/stumble-guys.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.kitkagames.fallbuddies/launch-video/mobile/stumble-guys.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/kitika-games/7999/stumble-guys.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/kitika-games/7999/stumble-guys.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix3.setColor('#66ff99');
                    nowggfix3.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix3.setURL(String());
                    nowggfix3.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix3.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix3.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix3.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> Melon Playground'), String('status 🔴'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> Rocket League'), String('status 🔴'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> Android'), String('status 🔴'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> FIFA: Moblie'), String('status 🔴'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> Pixel Gun 3D'), String('status 🔴'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix3.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix3]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix4 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/playducky/7199/melon-sandbox?ng_ifp_partner=skool', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.studio27.MelonPlayground/launch-video/desktop/melon-sandbox.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.studio27.MelonPlayground/launch-video/mobile/melon-sandbox.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/playducky/7199/melon-sandbox.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/playducky/7199/melon-sandbox.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix4.setColor('#66ff99');
                    nowggfix4.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix4.setURL(String());
                    nowggfix4.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix4.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix4.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix4.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix4.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix4.addField(String('<a:spinner:1219131938829504543> Rocket League'), String('status 🔴'), false);
                    nowggfix4.addField(String('<a:spinner:1219131938829504543> Android'), String('status 🔴'), false);
                    nowggfix4.addField(String('<a:spinner:1219131938829504543> FIFA: Moblie'), String('status 🔴'), false);
                    nowggfix4.addField(String('<a:spinner:1219131938829504543> Pixel Gun 3D'), String('status 🔴'), false);
                    nowggfix4.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                    nowggfix4.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix4.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix4.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix4]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix5 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/psyonix-studios/4656/rocket-league?ng_ifp_partner=skool', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.Psyonix.RL2D/launch-video/desktop/rocket-league-sideswipe.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.Psyonix.RL2D/launch-video/mobile/rocket-league-sideswipe.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/psyonix-studios/4656/rocket-league.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/psyonix-studios/4656/rocket-league.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix5.setColor('#66ff99');
                    nowggfix5.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix5.setURL(String());
                    nowggfix5.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix5.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix5.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix5.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix5.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix5.addField(String('Rocket League'), String('status 🟢'), false);
                    nowggfix5.addField(String('<a:spinner:1219131938829504543> Android'), String('status 🔴'), false);
                    nowggfix5.addField(String('<a:spinner:1219131938829504543> FIFA: Moblie'), String('status 🔴'), false);
                    nowggfix5.addField(String('<a:spinner:1219131938829504543> Pixel Gun 3D'), String('status 🔴'), false);
                    nowggfix5.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                    nowggfix5.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix5.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix5.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix5]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix6 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/uncube/7074/now', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.uncube.launcher3/launch-video/desktop/now.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.uncube.launcher3/launch-video/mobile/now.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/uncube/7074/now.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/uncube/7074/now.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix6.setColor('#66ff99');
                    nowggfix6.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix6.setURL(String());
                    nowggfix6.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix6.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix6.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix6.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix6.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix6.addField(String('Rocket League'), String('status 🟢'), false);
                    nowggfix6.addField(String('Android'), String('status 🟢'), false);
                    nowggfix6.addField(String('<a:spinner:1219131938829504543> FIFA: Moblie'), String('status 🔴'), false);
                    nowggfix6.addField(String('<a:spinner:1219131938829504543> Pixel Gun 3D'), String('status 🔴'), false);
                    nowggfix6.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                    nowggfix6.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix6.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix6.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix6]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix7 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/electronic-arts/1353/ea-sports-fc-mobile-24-soccer?ng_ifp_partner=skool', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.ea.gp.fifamobile/launch-video/desktop/ea-sports-fc-mobile-24-soccer.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.ea.gp.fifamobile/launch-video/mobile/ea-sports-fc-mobile-24-soccer.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/electronic-arts/1353/ea-sports-fc-mobile-24-soccer.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/electronic-arts/1353/ea-sports-fc-mobile-24-soccer.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix7.setColor('#66ff99');
                    nowggfix7.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix7.setURL(String());
                    nowggfix7.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix7.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix7.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix7.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix7.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix7.addField(String('Rocket League'), String('status 🟢'), false);
                    nowggfix7.addField(String('Android'), String('status 🟢'), false);
                    nowggfix7.addField(String('FIFA: Moblie'), String('status 🟢'), false);
                    nowggfix7.addField(String('<a:spinner:1219131938829504543> Pixel Gun 3D'), String('status 🔴'), false);
                    nowggfix7.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                    nowggfix7.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix7.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix7.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix7]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix8 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/pixel-gun-3d/2652/pixel-gun?ng_ifp_partner=skool', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.pixel.gun3d/launch-video/desktop/pixel-gun.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.pixel.gun3d/launch-video/mobile/pixel-gun.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/pixel-gun-3d/2652/pixel-gun.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/pixel-gun-3d/2652/pixel-gun.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix8.setColor('#66ff99');
                    nowggfix8.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix8.setURL(String());
                    nowggfix8.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix8.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix8.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix8.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix8.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix8.addField(String('Rocket League'), String('status 🟢'), false);
                    nowggfix8.addField(String('Android'), String('status 🟢'), false);
                    nowggfix8.addField(String('FIFA: Moblie'), String('status 🟢'), false);
                    nowggfix8.addField(String('Pixel Gun 3D'), String('status 🟢'), false);
                    nowggfix8.addField(String('<a:spinner:1219131938829504543> Cookie Run: Kingdom'), String('status 🔴'), false);
                    nowggfix8.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix8.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix8.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix8]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix9 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/a/3475/b', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.devsisters.ck/launch-video/desktop/cookie-run.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.devsisters.ck/launch-video/mobile/cookie-run.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/devsisters-corporation/3475/cookie-run.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/devsisters-corporation/3475/cookie-run.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix9.setColor('#66ff99');
                    nowggfix9.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix9.setURL(String());
                    nowggfix9.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix9.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix9.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix9.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix9.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix9.addField(String('Rocket League'), String('status 🟢'), false);
                    nowggfix9.addField(String('Android'), String('status 🟢'), false);
                    nowggfix9.addField(String('FIFA: Moblie'), String('status 🟢'), false);
                    nowggfix9.addField(String('Pixel Gun 3D'), String('status 🟢'), false);
                    nowggfix9.addField(String('Cookie Run: Kingdom'), String('status 🟢'), false);
                    nowggfix9.addField(String('<a:spinner:1219131938829504543> Fortnite'), String('status 🔴'), false);
                    nowggfix9.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix9.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix9]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix10 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/a/10004/b', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll('{"enableDisplayAds":true,"enablePrerollAds":true,"enableMidrollAds":false},"mobile":{"enableDisplayAds":true,"enablePrerollAds":true,"enableMidrollAds":false}},"tryAndDownload":', String('{"enableDisplayAds":false,"enablePrerollAds":false,"enableMidrollAds":false},"mobile":{"enableDisplayAds":false,"enablePrerollAds":false,"enableMidrollAds":false}},"tryAndDownload":')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.epicgames.fortnite/launch-video/desktop/fortnite.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.epicgames.fortnite/launch-video/mobile/fortnite.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/epic-games/7308/fortnite.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/epic-games/7308/fortnite.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix10.setColor('#66ff99');
                    nowggfix10.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix10.setURL(String());
                    nowggfix10.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix10.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix10.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix10.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix10.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix10.addField(String('Rocket League'), String('status 🟢'), false);
                    nowggfix10.addField(String('Android'), String('status 🟢'), false);
                    nowggfix10.addField(String('FIFA: Moblie'), String('status 🟢'), false);
                    nowggfix10.addField(String('Pixel Gun 3D'), String('status 🟢'), false);
                    nowggfix10.addField(String('Cookie Run: Kingdom'), String('status 🟢'), false);
                    nowggfix10.addField(String('Fortnite'), String('status 🟢'), false);
                    nowggfix10.addField(String('<a:spinner:1219131938829504543> Geometry Dash'), String('status 🔴'), false);
                    nowggfix10.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix10]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix11 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/robtop-games/1400/geometry-dash?ng_ifp_partner=skool', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.robtopx.geometryjump/launch-video/desktop/geometry-dash.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.robtopx.geometryjump/launch-video/mobile/geometry-dash.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/robtop-games/1400/geometry-dash.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/robtop-games/1400/geometry-dash.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix11.setColor('#66ff99');
                    nowggfix11.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix11.setURL(String());
                    nowggfix11.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix11.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix11.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix11.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix11.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix11.addField(String('Rocket League'), String('status 🟢'), false);
                    nowggfix11.addField(String('Android'), String('status 🟢'), false);
                    nowggfix11.addField(String('FIFA: Moblie'), String('status 🟢'), false);
                    nowggfix11.addField(String('Pixel Gun 3D'), String('status 🟢'), false);
                    nowggfix11.addField(String('Cookie Run: Kingdom'), String('status 🟢'), false);
                    nowggfix11.addField(String('Fortnite'), String('status 🟢'), false);
                    nowggfix11.addField(String('Geometry Dash'), String('status 🟢'), false);
                    nowggfix11.addField(String('<a:spinner:1219131938829504543> Aptoide'), String('status 🔴'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix11]
                    });

                    await delay(Number(1.5) * 1000);
                    var nowggfix12 = new Discord.MessageEmbed();
                    https.get('https://educationbluesky.com/play/aptoide/5874/aptoide?ng_ifp_partner=skool', async resp => {
                        let data = Buffer.alloc(0);
                        resp.on("data", async chunk => {
                            data = Buffer.concat([data, chunk]);
                        });
                        resp.on("end", async () => {
                            ngg_game = data && (String((String(data))).replaceAll(nowggbeforelobotomy, String(nowggafterlobotomy)));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.aptoide.partners.nowgg.store/launch-video/desktop/aptoide.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('https://cdn.now.gg/apps-content/com.aptoide.partners.nowgg.store/launch-video/mobile/aptoide.mp4', String('/loading.mp4')));
                            ngg_game = (String((String(ngg_game))).replaceAll('"enableHeader":true', String('"enableHeader":false')));
                            fs.writeFileSync('nggstuff/apps/frogiee1/69420/custom-thingy-loader.html', ngg_game, async function(err) {
                                console.log(err)
                            });
                            fs.appendFileSync('nggstuff/apps/frogiee1/69420/custom-thingy-loader.html', thefuckingscriptthing, async function(err) {
                                if (err) {
                                    console.log((err));
                                }

                            });

                        });
                    })
                    nowggfix12.setColor('#66ff99');
                    nowggfix12.setTitle(String('<a:spinner:1219131938829504543> fixing nowgg'))
                    nowggfix12.setURL(String());
                    nowggfix12.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                        format: "png"
                    }))), String());
                    nowggfix12.addField(String('Roblox'), String('status 🟢'), false);
                    nowggfix12.addField(String('Cod'), String('status 🟢'), false);
                    nowggfix12.addField(String('Stumble Guys'), String('status 🟢'), false);
                    nowggfix12.addField(String('Melon Playground'), String('status 🟢'), false);
                    nowggfix12.addField(String('Rocket League'), String('status 🟢'), false);
                    nowggfix12.addField(String('Android'), String('status 🟢'), false);
                    nowggfix12.addField(String('FIFA: Moblie'), String('status 🟢'), false);
                    nowggfix12.addField(String('Pixel Gun 3D'), String('status 🟢'), false);
                    nowggfix12.addField(String('Cookie Run: Kingdom'), String('status 🟢'), false);
                    nowggfix12.addField(String('Fortnite'), String('status 🟢'), false);
                    nowggfix12.addField(String('Geometry Dash'), String('status 🟢'), false);
                    nowggfix12.addField(String('Aptoide'), String('status 🟢'), false);
                    s4dfrost_real_reply.edit({
                        embeds: [nowggfix12]
                    });

                    checksum = mathRandomInt(1, 100000000000000);
                    await fs.readFile('upload.bat', async function(err, data) {
                        if (err) {
                            console.log((err));
                        }
                        oldcheck = (data);
                        S4D_APP_write.sync(String('nggstuff/checksum.txt'), String(checksum), {
                            overwrite: true
                        });
                        uploadscript = (String(([`@echo off
                cd nggstuff
                git commit -a -m "updated - check code is `, oldcheck, `"
                git push -f -u origin main
                exit`].join(''))).replaceAll(oldcheck, String(checksum)));
                        S4D_APP_write.sync(String('upload.bat'), String(uploadscript), {
                            overwrite: true
                        });
                        await delay(Number(2) * 1000);
                        var upload = new Discord.MessageEmbed();
                        upload.setColor('#66ff99');
                        upload.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                            format: "png"
                        }))), String());
                        upload.setTitle(String(('uploading fix to servers... check code is ' + String(checksum))))
                        upload.setURL(String());
                        console.log('#$-init upload-$#');
                        exec('start upload.bat');
                        s4dfrost_real_reply.edit({
                            embeds: [upload]
                        });
                        await delay(Number(5) * 1000);

                        /*
                        server 1
                        */
                        https.get('https://api.render.com/deploy/srv-cob8vt6n7f5s739f2350?key=MH3UNjXlMo8', async resp => {
                            let data = Buffer.alloc(0);
                            resp.on("data", async chunk => {
                                data = Buffer.concat([data, chunk]);
                            });
                            resp.on("end", async () => {

                                /*
                                server 2
                                */
                                https.get('https://api.render.com/deploy/srv-cmj2e2ud3nmc73cls4kg?key=_i4j1mk0xvE', async resp => {
                                    let data = Buffer.alloc(0);
                                    resp.on("data", async chunk => {
                                        data = Buffer.concat([data, chunk]);
                                    });
                                    resp.on("end", async () => {

                                        /*
                                        server 3
                                        */
                                        https.get('https://api.render.com/deploy/srv-cmsg0ved3nmc73esigc0?key=ig4Wyvd3fSs', async resp => {
                                            let data = Buffer.alloc(0);
                                            resp.on("data", async chunk => {
                                                data = Buffer.concat([data, chunk]);
                                            });
                                            resp.on("end", async () => {

                                                /*
                                                server 4
                                                */
                                                https.get('https://api.render.com/deploy/srv-ck9l7n6v3ddc73dis4i0?key=rSG2Ke5Sxgk', async resp => {
                                                    let data = Buffer.alloc(0);
                                                    resp.on("data", async chunk => {
                                                        data = Buffer.concat([data, chunk]);
                                                    });
                                                    resp.on("end", async () => {
                                                        console.log('#$-told render to get back to work-$#');

                                                    });
                                                })

                                            });
                                        })

                                    });
                                })

                            });
                        })
                        https.get('https://api.announcements.yourmom.eu.org/api/announce?key=018f26d9-f62f-7e77-b22b-9cd0d22a0b8c&message=%E2%9A%A0%EF%B8%8FALERT:%20games%20have%20been%20updated!%20waiting%20for%20servers%20to%20update...%E2%9A%A0%EF%B8%8F', async resp => {
                            let data = Buffer.alloc(0);
                            resp.on("data", async chunk => {
                                data = Buffer.concat([data, chunk]);
                            });
                            resp.on("end", async () => {

                            });
                        })
                        var nowggfix_servers0 = new Discord.MessageEmbed();
                        nowggfix_servers0.setColor('#66ff99');
                        nowggfix_servers0.setTitle(String('<a:spinner:1182859385010147358> nowgg bypass 🆙 checking servers for update'))
                        nowggfix_servers0.setURL(String());
                        nowggfix_servers0.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                            format: "png"
                        }))), String());
                        nowggfix_servers0.addField(String('--------------------------------------'), String('servers status'), false);
                        nowggfix_servers0.addField(String(' <a:spinner:1182859385010147358> server 1'), String('status 🔴'), false);
                        nowggfix_servers0.addField(String(' <a:spinner:1182859385010147358> server 2'), String('status 🔴'), false);
                        nowggfix_servers0.addField(String('<a:spinner:1182859385010147358> server 3'), String('status 🔴'), false);
                        nowggfix_servers0.addField(String('<a:spinner:1182859385010147358> server 4'), String('status 🔴'), false);
                        s4dfrost_real_reply.edit({
                            embeds: [nowggfix_servers0]
                        });
                        https.get('https://bentleysucksatgetawayshootout.yourmom.eu.org/checksum.txt', async resp => {
                            let data = Buffer.alloc(0);
                            resp.on("data", async chunk => {
                                data = Buffer.concat([data, chunk]);
                            });
                            resp.on("end", async () => {
                                bufferedchecksum = data;
                                while (!(bufferedchecksum == checksum)) {
                                    https.get('https://bentleysucksatgetawayshootout.yourmom.eu.org/checksum.txt', async resp => {
                                        let data = Buffer.alloc(0);
                                        resp.on("data", async chunk => {
                                            data = Buffer.concat([data, chunk]);
                                        });
                                        resp.on("end", async () => {
                                            bufferedchecksum = data;
                                            console.log('checked server 1');

                                        });
                                    })
                                    await delay(Number(10) * 1000);
                                }
                                console.log('server 1 fixed');
                                var nowggfix_servers1 = new Discord.MessageEmbed();
                                nowggfix_servers1.setColor('#66ff99');
                                nowggfix_servers1.setTitle(String('<a:spinner:1182859385010147358> nowgg bypass 🆙 checking servers for update'))
                                nowggfix_servers1.setURL(String());
                                nowggfix_servers1.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                                    format: "png"
                                }))), String());
                                nowggfix_servers1.addField(String('--------------------------------------'), String('servers status'), false);
                                nowggfix_servers1.addField(String('server 1'), String('status 🟢'), false);
                                nowggfix_servers1.addField(String(' <a:spinner:1182859385010147358> server 2'), String('status 🔴'), false);
                                nowggfix_servers1.addField(String('<a:spinner:1182859385010147358> server 3'), String('status 🔴'), false);
                                nowggfix_servers1.addField(String('<a:spinner:1182859385010147358> server 4'), String('status 🔴'), false);
                                s4dfrost_real_reply.edit({
                                    embeds: [nowggfix_servers1]
                                });
                                https.get('https://dashboard-cq4z.onrender.com/checksum.txt', async resp => {
                                    let data = Buffer.alloc(0);
                                    resp.on("data", async chunk => {
                                        data = Buffer.concat([data, chunk]);
                                    });
                                    resp.on("end", async () => {
                                        bufferedchecksum = data;
                                        while (!(bufferedchecksum == checksum)) {
                                            https.get('https://dashboard-cq4z.onrender.com/checksum.txt', async resp => {
                                                let data = Buffer.alloc(0);
                                                resp.on("data", async chunk => {
                                                    data = Buffer.concat([data, chunk]);
                                                });
                                                resp.on("end", async () => {
                                                    bufferedchecksum = data;
                                                    console.log('checked server 2');

                                                });
                                            })
                                            await delay(Number(10) * 1000);
                                        }
                                        console.log('server 2 fixed');
                                        var nowggfix_servers2 = new Discord.MessageEmbed();
                                        nowggfix_servers2.setColor('#66ff99');
                                        nowggfix_servers2.setTitle(String('<a:spinner:1182859385010147358> nowgg bypass 🆙 checking servers for update'))
                                        nowggfix_servers2.setURL(String());
                                        nowggfix_servers2.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                                            format: "png"
                                        }))), String());
                                        nowggfix_servers2.addField(String('--------------------------------------'), String('servers status'), false);
                                        nowggfix_servers2.addField(String('server 1'), String('status 🟢'), false);
                                        nowggfix_servers2.addField(String('server 2'), String('status 🟢'), false);
                                        nowggfix_servers2.addField(String('<a:spinner:1182859385010147358> server 3'), String('status 🔴'), false);
                                        nowggfix_servers2.addField(String('<a:spinner:1182859385010147358> server 4'), String('status 🔴'), false);
                                        s4dfrost_real_reply.edit({
                                            embeds: [nowggfix_servers2]
                                        });
                                        https.get('https://renderisgay.onrender.com/checksum.txt', async resp => {
                                            let data = Buffer.alloc(0);
                                            resp.on("data", async chunk => {
                                                data = Buffer.concat([data, chunk]);
                                            });
                                            resp.on("end", async () => {
                                                bufferedchecksum = data;
                                                while (!(bufferedchecksum == checksum)) {
                                                    https.get('https://renderisgay.onrender.com/checksum.txt', async resp => {
                                                        let data = Buffer.alloc(0);
                                                        resp.on("data", async chunk => {
                                                            data = Buffer.concat([data, chunk]);
                                                        });
                                                        resp.on("end", async () => {
                                                            bufferedchecksum = data;
                                                            console.log('checked server 3');

                                                        });
                                                    })
                                                    await delay(Number(10) * 1000);
                                                }
                                                console.log('server 3 fixed');
                                                var nowggfix_servers3 = new Discord.MessageEmbed();
                                                nowggfix_servers3.setColor('#66ff99');
                                                nowggfix_servers3.setTitle(String('<a:spinner:1182859385010147358> nowgg bypass 🆙 checking servers for update'))
                                                nowggfix_servers3.setURL(String());
                                                nowggfix_servers3.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                                                    format: "png"
                                                }))), String());
                                                nowggfix_servers3.addField(String('--------------------------------------'), String('servers status'), false);
                                                nowggfix_servers3.addField(String('server 1'), String('status 🟢'), false);
                                                nowggfix_servers3.addField(String('server 2'), String('status 🟢'), false);
                                                nowggfix_servers3.addField(String('server 3'), String('status 🟢'), false);
                                                nowggfix_servers3.addField(String('<a:spinner:1182859385010147358> server 4'), String('status 🔴'), false);
                                                s4dfrost_real_reply.edit({
                                                    embeds: [nowggfix_servers3]
                                                });
                                                https.get('https://s2g3.onrender.com/checksum.txt', async resp => {
                                                    let data = Buffer.alloc(0);
                                                    resp.on("data", async chunk => {
                                                        data = Buffer.concat([data, chunk]);
                                                    });
                                                    resp.on("end", async () => {
                                                        bufferedchecksum = data;
                                                        while (!(bufferedchecksum == checksum)) {
                                                            https.get('https://s2g3.onrender.com/checksum.txt', async resp => {
                                                                let data = Buffer.alloc(0);
                                                                resp.on("data", async chunk => {
                                                                    data = Buffer.concat([data, chunk]);
                                                                });
                                                                resp.on("end", async () => {
                                                                    bufferedchecksum = data;
                                                                    console.log('checked server 4');

                                                                });
                                                            })
                                                            await delay(Number(15) * 1000);
                                                        }
                                                        console.log('server 4 fixed');
                                                        var nowggfix_servers4 = new Discord.MessageEmbed();
                                                        nowggfix_servers4.setColor('#66ff99');
                                                        nowggfix_servers4.setTitle(String('nowgg bypass 🆙'))
                                                        nowggfix_servers4.setURL(String());
                                                        nowggfix_servers4.setAuthor(String((s4dmessage.member.user.username)), String(((s4dmessage.author).displayAvatarURL({
                                                            format: "png"
                                                        }))), String());
                                                        nowggfix_servers4.addField(String('--------------------------------------'), String('servers status'), false);
                                                        nowggfix_servers4.addField(String('server 1'), String('status 🟢'), false);
                                                        nowggfix_servers4.addField(String('server 2'), String('status 🟢'), false);
                                                        nowggfix_servers4.addField(String('server 3'), String('status 🟢'), false);
                                                        nowggfix_servers4.addField(String('server 4'), String('status 🟢'), false);
                                                        s4dfrost_real_reply.edit({
                                                            embeds: [nowggfix_servers4]
                                                        });
                                                        await delay(Number(2) * 1000);
                                                        s4dfrost_real_reply.delete();
                                                        s4d.client.channels.cache.get('1182505590430367876').send({
                                                            embeds: [nowggfix_servers4],
                                                            content: String('<@&1182504843139612723>')
                                                        });
                                                        https.get('https://api.announcements.yourmom.eu.org/api/announce?key=018f26d9-f62f-7e77-b22b-9cd0d22a0b8c&message=%E2%9A%A0%EF%B8%8FALERT: nowgg fixed%E2%9A%A0%EF%B8%8F&', async resp => {
                                                            let data = Buffer.alloc(0);
                                                            resp.on("data", async chunk => {
                                                                data = Buffer.concat([data, chunk]);
                                                            });
                                                            resp.on("end", async () => {

                                                            });
                                                        })


                                                    });
                                                })


                                            });
                                        })


                                    });
                                })


                            });
                        })



                    });

                });

            } else {
                var nowggfixerror = new Discord.MessageEmbed();
                nowggfixerror.setColor('#ff0000');
                nowggfixerror.setTitle(String('error with !!fix-nowgg'))
                nowggfixerror.setURL(String());
                nowggfixerror.addField(String('you cant use this unless you are the owner!'), String('idiot'), true);
                s4dmessage.reply({
                    embeds: [nowggfixerror],
                    allowedMentions: {
                        repliedUser: true
                    }
                });

            }
        }

    });

    await s4d.client.login('MTAyMTUxMTE1NDAzMzQ5NjA3Ng.GcIUG-._Ysq_Xa9TcyTKHVSRPxlbF2bjVEALfhLo8re9w').catch((e) => {
        const tokenInvalid = true;
        const tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });

    s4d.client.on('guildMemberAdd', async (param1) => {
        s4d.joiningMember = param1;
        ischeckedserverparty = (fs.readFileSync((['party/', (interaction.guild).id, '//isitreallyaparty.txt'].join('')), 'utf8'));
        if (ischeckedserverparty == 'true') {
            if ((s4d.joiningMember.user) == (fs.readFileSync((['party/', (interaction.guild).id, '//partyleaderid.txt'].join('')), 'utf8'))) {
                (s4d.joiningMember).roles.add((s4d.joiningMember).guild.roles.cache.find((role) => role.id === (fs.readFileSync((['party/', (interaction.guild).id, '/partyleaderroleid.txt'].join('')), 'utf8')) || role.name === (fs.readFileSync((['party/', (interaction.guild).id, '/partyleaderroleid.txt'].join('')), 'utf8')) || '@' + role.name === (fs.readFileSync((['party/', (interaction.guild).id, '/partyleaderroleid.txt'].join('')), 'utf8'))));
                while (!(((fs.readFileSync((['party/', (interaction.guild).id, '/party.txt'].join('')), 'utf8')).members.cache.filter(m => !m.user.bot).size) == '1')) {
                    await delay(Number(3) * 1000);
                    eventEmitter.emit('thechosenpartymenberbdcst');
                }
                await delay(Number(15) * 1000);
                partyshouldbedeleted = true;
            }
        }
        s4d.joiningMember = null
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == '<@1021511154033496076>') {
            let help = new MessageEmbed()
            help.setTitle('Help');
            help.setColor('#66ff99');
            help.setDescription('frogie\'s arcade bot v2 help');
            help.addField('!!help', 'the command you just ran', false);
            help.addField('!!dm <@mention-somebody>', 'sends a message in someones dms. (they have to have it enabled for it to work)', false);
            help.addField('!!akinator <character, object, animal>', 'lets you play akinator with the following options: charactor, object, and animal', false);
            help.addField('!!info', 'gives you info about the bot and server stats', false);
            help.addField('!!webshot <https://example.com>', 'sends a screenshot of a specific website you desire (bad ones = perm ban and message deletion.)', false);
            help.addField('!!scandomain <example.com>', 'scans a domain. powered by urlscan.io', false);
            help.addField('!!add-gun <image link or image attachment>', 'puts a hand holding a gun on your image. powered by poopoo api', false);
            help.addField('!!deepfry <image link or image attachment>', 'deepfries your image. powered by poopoo api', false);
            help.setFooter('more will be added soon - frogie\'s arcade bot v2');
            s4dmessage.channel.send({
                embeds: [help]
            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((((s4dmessage.content).toLowerCase()) || '').startsWith('!!help' || '')) {
            let help = new MessageEmbed()
            help.setTitle('Help');
            help.setColor('#66ff99');
            help.setDescription('frogie\'s arcade bot v2 help');
            help.addField('!!help', 'the command you just ran', false);
            help.addField('!!dm <@mention-somebody>', 'sends a message in someones dms. (they have to have it enabled for it to work)', false);
            help.addField('!!akinator <character, object, animal>', 'lets you play akinator with the following options: charactor, object, and animal', false);
            help.addField('!!info', 'gives you info about the bot and server stats', false);
            help.addField('!!webshot <https://example.com>', 'sends a screenshot of a specific website you desire (bad ones = perm ban and message deletion.)', false);
            help.addField('!!scandomain <example.com>', 'scans a domain. powered by urlscan.io', false);
            help.addField('!!add-gun <image link or image attachment>', 'puts a hand holding a gun on your image. powered by poopoo api', false);
            help.addField('!!deepfry <image link or image attachment>', 'deepfries your image. powered by poopoo api', false);
            help.setFooter('more will be added soon - frogie\'s arcade bot v2');
            s4dmessage.channel.send({
                embeds: [help]
            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((((s4dmessage.content).toLowerCase()) || '').startsWith('!!info' || '')) {
            let info = new MessageEmbed()
            info.setTitle('Bot Info');
            info.setColor('#66ff99');
            info.setDescription('frogie\'s arcade bot v2 info');
            info.addField('OS:', String(os.platform()), false);
            info.addField('Free Memory:', String(os.freemem()), false);
            info.addField('System Uptime:', String(miliConverter.secsMinsHoursDays((os.sysUptime() * 1000), "string")), false);
            info.addField('Bot version:', 'v2.3', false);
            info.setFooter('more will be added soon - frogie\'s arcade bot v2');
            s4dmessage.channel.send({
                embeds: [info]
            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((((s4dmessage.content).toLowerCase()) || '').startsWith('!!akinator' || '')) {
            let akinatorerror = new MessageEmbed()
            akinatorerror.setTitle('Error!');
            akinatorerror.setColor('#ff0000');
            akinatorerror.setDescription('error with !!akinator');
            akinatorerror.addField('details:', 'you most likely didnt put a game type which are as follows: character, animal, and object.', false);
            akinatorerror.setFooter('more will be added soon - frogie\'s arcade bot v2');
            s4dmessage.channel.send({
                embeds: [akinatorerror]
            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        arguments2 = (s4dmessage.content).split(' ');
        command = arguments2.splice(0, 1)[0];
        if (((command.toLowerCase()) || '').startsWith('!!dm' || '')) {
            s4dmessage.delete();
            let dmsent = new MessageEmbed()
            dmsent.setTitle('your message was sent!');
            dmsent.setColor('#66ff99');
            s4dmessage.channel.send({
                embeds: [dmsent]
            }).then(async (s4dreply) => {
                await delay(Number(1) * 1000);
                s4dreply.delete();

            });
            let dm = new MessageEmbed()
            dm.setTitle('Message from ' + String(s4dmessage.member.user.username));
            dm.setColor('#66ff99');
            dm.setDescription('a member ran the !!dm command and mentioned you!');
            dm.addField('message content:', s4dmessage.content, false);
            dm.setFooter('message content not condoned by frogie\'s arcade - frogie\'s arcade bot v2');
            (s4dmessage.mentions.members.first()).send({
                embeds: [dm]
            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((((s4dmessage.content).toLowerCase()) || '').startsWith('!!akinator object' || '')) {
            if ((s4dmessage.author).bot) {
                let akinatorbot1 = new MessageEmbed()
                akinatorbot1.setTitle('Error!');
                akinatorbot1.setColor('#ff0000');
                akinatorbot1.setDescription('error with !!akinator');
                akinatorbot1.addField('details:', 'you cannot play on site chat or as a bot!', false);
                akinatorbot1.setFooter('more will be added soon - frogie\'s arcade bot v2');
                s4dmessage.channel.send({
                    embeds: [akinatorbot1]
                });
            } else {
                akinator(s4dmessage, {
                    language: "en",
                    childMode: true,
                    gameType: ('object'),
                    useButtons: true
                })
            }
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        if ((interaction.commandName) == 'createparty') {
            await interaction.reply({
                content: 'creating your party...',
                ephemeral: true,
                components: []
            });
            partyleader = ((interaction.member).nickname == null ? (interaction.member).user.username : (interaction.member).nickname);
            partyleaderid = ((interaction.member).id);
            try {
                s4d.client.guilds.create(String((String(partyleader) + '\'s party'))).then(async newServer => {
                    partyshouldbedeleted = false;
                    party = (newServer);
                    partyid = ((newServer).id);
                    partyvoice = (newServer).channels.cache.find((category) => category.name === 'General');
                    S4D_APP_write.sync(String((['party/', partyid, '/partyleader.txt'].join(''))), String(partyleader), {
                        overwrite: true
                    });
                    S4D_APP_write.sync(String((['party/', partyid, '/partyleaderid.txt'].join(''))), String(partyleaderid), {
                        overwrite: true
                    });
                    S4D_APP_write.sync(String((['party/', partyid, '/partyid.txt'].join(''))), String(partyid), {
                        overwrite: true
                    });
                    S4D_APP_write.sync(String((['party/', partyid, '/partyname.txt'].join(''))), String(party), {
                        overwrite: true
                    });
                    S4D_APP_write.sync(String((['party/', partyid, '/isitreallyaparty.txt'].join(''))), String('true'), {
                        overwrite: true
                    });
                    (newServer).setIcon(((interaction.member).displayAvatarURL({
                        format: "png"
                    })), 'created server icon')

                    partyvoice.createInvite({
                        maxAge: 0,
                        maxUses: 0
                    }).then(async invite => {
                        await delay(Number(0.1) * 1000);
                        partyinvite = (invite.url);
                        await interaction.editReply({
                            content: (String(partyinvite) + ' is your party invite! The server will be deleted in 15 seconds if you or somebody else does not join the vc.'),
                            components: []
                        });
                        console.log((invite.url));
                        S4D_APP_write.sync(String((['party/', partyid, '/partyinvite.txt'].join(''))), String(partyinvite), {
                            overwrite: true
                        });
                    });
                    party.roles.create({
                        name: 'party leader',
                        color: '#ffcc00'
                    }).then(async s4d_create_role_then_role => {
                        partyleaderroleid = ((s4d_create_role_then_role).id);
                        console.log(((s4d_create_role_then_role).id));
                        S4D_APP_write.sync(String((['party/', partyid, '/partyleaderroleid.txt'].join(''))), String(((s4d_create_role_then_role).id)), {
                            overwrite: true
                        });
                    })
                    await delay(Number(0.1) * 1000);
                    partyleaderroleid.setPermissions(['KICK_MEMBERS']);
                    await delay(Number(0.1) * 1000);
                    partyleaderroleid.setPermissions(['MUTE_MEMBERS']);
                    await delay(Number(0.1) * 1000);
                    partyleaderroleid.setPermissions(['DEAFEN_MEMBERS']);
                    partyleaderroleid.setPermissions(['ADMINISTRATOR']);
                    partyleaderroleid.setHoist(true, 'skibidi')
                    while (!(partyshouldbedeleted == true)) {
                        await delay(Number(1) * 1000);
                    }
                    (newServer).delete()

                })
            } catch (err) {
                await interaction.editReply({
                    content: 'an error has occoured while trying to create your party! screenshot this message and ping frogiee1.',
                    components: []
                });

            }
        } else if (false) {}

    });

    eventEmitter.on('thechosenpartymenberbdcst', async =>{
        thechosenpartymember = (party.members.cache.random().user);
        console.log(thechosenpartymember);
        console.log((thechosenpartymember.voice.channel != null));

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((((s4dmessage.content).toLowerCase()) || '').startsWith('!!akinator animal' || '')) {
            if ((s4dmessage.author).bot) {
                let akinatorbot1 = new MessageEmbed()
                akinatorbot1.setTitle('Error!');
                akinatorbot1.setColor('#ff0000');
                akinatorbot1.setDescription('error with !!akinator');
                akinatorbot1.addField('details:', 'you cannot play on site chat or as a bot!', false);
                akinatorbot1.setFooter('more will be added soon - frogie\'s arcade bot v2', '!!akinator animal');
                s4dmessage.channel.send({
                    embeds: [akinatorbot1]
                });
            } else {
                akinator(s4dmessage, {
                    language: "en",
                    childMode: true,
                    gameType: ('animal'),
                    useButtons: true
                })
            }
        }

    });

    return s4d
})();