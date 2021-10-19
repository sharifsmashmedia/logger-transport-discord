# Discord transport for Simply Hexagonal Logger
![Tests](https://github.com/simplyhexagonal/logger-transport-discord/workflows/tests/badge.svg)
[![Try logger on RunKit](https://badge.runkitcdn.com/@simplyhexagonal/logger.svg)](https://npm.runkit.com/@simplyhexagonal/logger)

This is a transport which allows [@simplyhexagonal/logger](https://github.com/simplyhexagonal/logger) to use Discord as a communication channel.

![image depicting four automated messages sent by simplyhexagonal/logger and received by discord](https://raw.githubusercontent.com/simplyhexagonal/logger-transport-discord/main/assets/logger-transport-discord-output-example-1.png)

## Open source notice

This project is open to updates by its users, [I](https://github.com/jeanlescure) ensure that PRs are relevant to the community.
In other words, if you find a bug or want a new feature, please help us by becoming one of the
[contributors](#contributors-) ✌️ ! See the [contributing section](#contributing)

## Like this module? ❤

Please consider:

- [Buying me a coffee](https://www.buymeacoffee.com/jeanlescure) ☕
- Supporting Simply Hexagonal on [Open Collective](https://opencollective.com/simplyhexagonal) 🏆
- Starring this repo on [Github](https://github.com/simplyhexagonal/logger-transport-discord) 🌟

## Usage

```ts
require('dotenv').config();

import os from 'os';

import Logger, {
  LoggerTransportName,
  LoggerTransportResult,
} from '@simplyhexagonal/logger';
import DiscordTransport from '@simplyhexagonal/logger-transport-discord';

const discordDefault = {
  transport: LoggerTransportName.DISCORD,
  options: {
    destination: (process.env.DISCORD_WEBHOOK || ''),
  },
};

const discordError = {
  transport: LoggerTransportName.DISCORD,
  options: {
    destination: (process.env.DISCORD_ERROR_WEBHOOK || ''),
  },
};

const logger = new Logger({
  optionsByLevel: {
    warn: [discordDefault],
    info: [discordDefault],
    debug: [discordDefault],
    error: [discordError],
    fatal: [discordError],
    all: [discordDefault],
  },
  singleton: false,
  transports: {
    [`${LoggerTransportName.DISCORD}`]: DiscordTransport,
  },
  appIdentifiers: {
    region: 'us-east-1',
    clusterType: 'KUBERNETES',
    cluster: 'MyCluster',
    hostname: os.hostname(),
    app: 'my-app',
  },
  catchTransportErrors: true,
});
```

For more info about configuration options go to [@simplyhexagonal/logger on Github](https://github.com/simplyhexagonal/logger).

## Discord Max Character Count

Currently Discord's Webhook API caps the content length at 2000 characters.

If your log content with a higher character count, this transport splits the message in two, sending
first the app identity, timestamp and log level, then sending the message contents as a plain-text
attachment. Similar to pasting a large message on Discord and selecting to send a file instead.

![image depicting an automated message containing a long error JSON that was sent as a file](https://raw.githubusercontent.com/simplyhexagonal/logger-transport-discord/main/assets/logger-transport-discord-file-output-example.png)

## Contributing

Yes, thank you! This plugin is community-driven, most of its features are from different authors.
Please update the docs and tests and add your name to the `package.json` file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jeanlescure.cr"><img src="https://avatars2.githubusercontent.com/u/3330339?v=4" width="100px;" alt=""/><br /><sub><b>Jean Lescure</b></sub></a><br /><a href="#maintenance-jeanlescure" title="Maintenance">🚧</a> <a href="https://github.com/simplyhexagonal/logger-transport-discord/commits?author=jeanlescure" title="Code">💻</a> <a href="#userTesting-jeanlescure" title="User Testing">📓</a> <a href="https://github.com/simplyhexagonal/logger-transport-discord/commits?author=jeanlescure" title="Tests">⚠️</a> <a href="#example-jeanlescure" title="Examples">💡</a> <a href="https://github.com/simplyhexagonal/logger-transport-discord/commits?author=jeanlescure" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/2huBrulee"><img src="https://avatars.githubusercontent.com/u/29010617?v=4" width="100px;" alt=""/><br /><sub><b>Alejandro Merino</b></sub></a><br /><a href="#maintenance-2huBrulee" title="Maintenance">🚧</a> <a href="https://github.com/simplyhexagonal/logger-transport-discord/commits?author=2huBrulee" title="Code">💻</a> <a href="#userTesting-2huBrulee" title="User Testing">📓</a> <a href="https://github.com/simplyhexagonal/logger-transport-discord/commits?author=2huBrulee" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
## License

Copyright (c) 2021-Present [Logger Contributors](https://github.com/simplyhexagonal/logger-transport-discord/#contributors-).<br/>
Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).