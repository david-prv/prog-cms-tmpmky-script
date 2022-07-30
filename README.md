# tampermonkey-scripts
little collection of tampermonkey plugins I've programmed for various websites

## Current Scripts

1. [Beautify Prog CMS (v2.4)](https://github.com/david-prv/prog-cms-tmpmky-scripts/blob/main/beautify_prog_cms.user.js) - Removes Closed Submissions
2. [Hide Sensitive Data (v0.1)](https://github.com/david-prv/prog-cms-tmpmky-scripts/blob/main/hide_sensitive_data.user.js) - Hide your sensitive data in all SIC-related Course-Management-Systems
3. [DarkMode Prog CMS (never finished)](https://github.com/david-prv/prog-cms-tmpmky-scripts/blob/main/darkmode_prog_cms.user.js) - Well, it makes the whole cms page... dark!  
(Since the development on this has stopped, I recommend [this](https://github.com/ColinTimBarndt/stylus_cms-sic-saarland-theme) stylus theme, made by [Colin Barndt](https://github.com/ColinTimBarndt))
4. [Pixle AutoHide Cookie (v0.1)](https://github.com/david-prv/tampermonkey-scripts/blob/main/pixle_hide_cookie.user.js) - I hate Angular an some of its immature features, which produce persistent graphical bugs. This plugin is a workaround mitigation of the cookie opt-in of pixle.gg.
5. [Legals AutoCheck (v0.1)](https://github.com/david-prv/tampermonkey-scripts/blob/main/legals_auto_check.user.js) - I'm not the person, who tries to hit these little checkboxes every time. So I made a small and very simple script, that searches for legal checkboxes, which are required. Also, I experimented with the "require" directive of tampermonkey.
6. [Vulnbox Flag Hide (v0.1)](https://github.com/david-prv/tampermonkey-scripts/blob/main/vulnbox_flag_hide.user.js) - I programmed a small challenge service, for which I host(ed) a vulnbox for testing purposes. Everytime I present this to someone who plans to try the challenge, I want to hide the flag, which is visible in the admin dashboard. 

## Installation

1. Download Tampermonkey for your browser ([here](https://www.tampermonkey.net))
2. Enable Tampermonkey
3. Go to the Utilities tab
4. Download project files as ``.zip`` ([current version](https://github.com/david-prv/prog-cms-tmpmky-scripts/archive/refs/heads/main.zip))
5. Extract zip-file
6. Press "Select File" in tampermonkey (you can find it in "File" Section)
7. Now select the ``.js`` file, you've extracted from the zip-file and which you wish to install
8. Press install
9. You're done

## Disclaimer

There are some known issues with these plugins. But since I don't program them for a public audience, I don't focus on user-friendly usability. Please not that, if you plan to re-factor or use some of these plugins. Thanks.
