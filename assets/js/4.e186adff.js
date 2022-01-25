(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{357:function(e,t,a){e.exports=a.p+"assets/img/1.512316f3.png"},358:function(e,t,a){e.exports=a.p+"assets/img/2.e68a57db.png"},359:function(e,t,a){e.exports=a.p+"assets/img/3.f67b9767.png"},360:function(e,t,a){e.exports=a.p+"assets/img/4.147e872c.png"},361:function(e,t,a){e.exports=a.p+"assets/img/5.ee88c806.png"},390:function(e,t,a){"use strict";a.r(t);var s=a(45),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"create-an-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-account"}},[e._v("#")]),e._v(" Create an Account")]),e._v(" "),s("p",[e._v("An address is the public part of a GEEK account. The private part is the key used to access this address. The public and private part together make up a GEEK account. To interact with GEEK chain create such as creating basic transactions and various operation, you need to create an account.")]),e._v(" "),s("h3",{attrs:{id:"storing-your-key-safely"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storing-your-key-safely"}},[e._v("#")]),e._v(" Storing your key safely")]),e._v(" "),s("p",[e._v("The seed is your key to the account. Knowing the seed allows you, or anyone else who knows the seed, to re-generate and control this account.")]),e._v(" "),s("p",[e._v("It is imperative to store the seed somewhere safe, secret, and secure. If you lose access to your account (i.e. you forget the password for your account's JSON file), you can re-create it by entering the seed. This also means that somebody else can have control over your account if they have access to your seed.")]),e._v(" "),s("p",[e._v("For maximum security, the seed should be written down on paper or another non-digital device and stored in a safe place. You may also want to protect your seed from physical damage, as well (e.g. by storing in a sealed plastic bag to prevent water damage, storing it in a fireproof safe, etching it in metal, etc.) It is recommended that you store multiple copies of the seed in geographically separate locations (e.g., one in your home safe and one in a safety deposit box at your bank).")]),e._v(" "),s("p",[e._v("You should definitely not store your seed on any kind of computer that has or may have access to the internet in the future.")]),e._v(" "),s("h3",{attrs:{id:"storing-your-account-s-json-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storing-your-account-s-json-file"}},[e._v("#")]),e._v(" Storing your account's JSON file")]),e._v(" "),s("p",[e._v("The JSON file is encrypted with a password, which means you can import it into any wallet which supports JSON imports, but to then use it, you need the password. You don't have to be as careful with your JSON file's storage as you would with your seed (i.e. it can be on a USB drive near you), but remember that in this case your account is only as secure as the password you used to encrypt it. Do not use easy to guess or hard to remember passwords. It is good practice to use a mnemonic password of four to five words. These are nearly impossible for computers to guess due to the number of combinations possible, but much easier for humans to remember.")]),e._v(" "),s("h3",{attrs:{id:"polkadot-js-browser-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js-browser-plugin"}},[e._v("#")]),e._v(" Polkadot{.js} Browser Plugin")]),e._v(" "),s("p",[e._v('The Polkadot{.js} plugin provides a reasonable balance of security and usability. It provides a separate local mechanism to generate your address and interact with Polkadot.\nThis method involves installing the Polkadot{.js} plugin and using it as a “virtual vault," separate from your browser, to store your private keys. It also allows signing of transactions and similar functionality.')]),e._v(" "),s("p",[e._v("It is still running on the same computer you use to connected to the internet with and thus is less secure than using Parity Signer or other air-gapped approaches.")]),e._v(" "),s("h3",{attrs:{id:"install-the-browser-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-browser-plugin"}},[e._v("#")]),e._v(" Install the Browser Plugin")]),e._v(" "),s("p",[e._v("The browser plugin is available for both "),s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Chrome"),s("OutboundLink")],1),e._v(" (and Chromium based browsers like Opera, Brave) and "),s("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FireFox"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("If you would like to know more or review the code of the plugin yourself, you can visit the "),s("a",{attrs:{href:"https://github.com/polkadot-js/extension",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github source repository"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("After installing the plugin, you should see the orange and white Polkadot{.js} logo in the menu bar of your browser.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(357),alt:"Install the Browser Plugin"}})]),e._v(" "),s("h3",{attrs:{id:"create-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-account"}},[e._v("#")]),e._v(" Create Account")]),e._v(" "),s("p",[e._v("Open the Polkadot{.js} browser extension by clicking the logo on the top bar of your browser. You will see a browser popup not unlike the one below.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(358),alt:"Create Account"}})]),e._v(" "),s("p",[e._v("Click the big plus button or select "),s("strong",[e._v('"Create new account"')]),e._v(" from the small plus icon in the top right. The Polkadot{.js} plugin will then use system randomness to make a new seed for you and display it to you in the form of twelve words.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(359),alt:"Create Account"}})]),e._v(" "),s("p",[e._v("You should back up these words as explained above. It is imperative to store the seed somewhere safe, secret, and secure. If you cannot access your account via Polkadot{.js} for some reason, you can re-enter your seed through the "),s("strong",[e._v('"Add account menu"')]),e._v(" by selecting "),s("strong",[e._v('"Import account from pre-existing seed"')]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(360),alt:"Create Account"}})]),e._v(" "),s("h3",{attrs:{id:"name-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name-account"}},[e._v("#")]),e._v(" Name Account")]),e._v(" "),s("p",[e._v("The account name is arbitrary and for your use only. It is not stored on the blockchain and will not be visible to other users who look at your address via a block explorer. If you're juggling multiple accounts, it helps to make this as descriptive and detailed as needed.")]),e._v(" "),s("h3",{attrs:{id:"enter-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enter-password"}},[e._v("#")]),e._v(" Enter Password")]),e._v(" "),s("p",[e._v("The password will be used to encrypt this account's information. You will need to re-enter it when using the account for any kind of outgoing transaction or when using it to cryptographically sign a message.")]),e._v(" "),s("p",[e._v("Note that this password does NOT protect your seed phrase. If someone knows the twelve words in your mnemonic seed, they still have control over your account even if they do not know the password.")]),e._v(" "),s("h3",{attrs:{id:"set-address-format-for-geek"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-address-format-for-geek"}},[e._v("#")]),e._v(" Set Address format for GEEK")]),e._v(" "),s("p",[e._v("Now we will ensure that the addresses are displayed as GEEK mainnet addresses. Click on "),s("strong",[e._v('"Options"')]),e._v(" at the top of the plugin window, and under "),s("strong",[e._v('"Display address format for"')]),e._v(" select "),s("strong",[e._v('"GEEK"')]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(361),alt:"Set Address format for GEEK"}})]),e._v(" "),s("h3",{attrs:{id:"subkey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subkey"}},[e._v("#")]),e._v(" Subkey")]),e._v(" "),s("p",[e._v("Subkey is recommended for technically advanced users who are comfortable with the command line and compiling Rust code. Subkey allows you to generate keys on any device that can compile the code. Subkey may also be useful for automated account generation using an air-gapped device. It is not recommended for general users.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/bin/utils/subkey",target:"_blank",rel:"noopener noreferrer"}},[e._v("You can find detailed build and usage instructions of subkey"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Use an generated account's secret phrase or secret seed, you can find out your GEEK's address by running this command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('subkey inspect "YOUR_SECRET_PHRASE_OR_SECRET_SEED" -n geek\n')])])]),s("p",[e._v("Let's take a look at the example below, first we generate a Kusama account, using that account, we can find out GEEK's address:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("subkey generate\n\nSecret phrase `wise spirit proof frame replace slot barely scorpion awesome slender vehicle tragic` is account:\n  Secret seed:      0x39a12cfdabf457a33a61aeef2878fd08fc3a5bd6f0baaa3d05a89ebab704672c\n  Public key (hex): 0xb2f058a9109b934f779d56d527ec8ae2c078dda9d229b24b4d70ff6267fef66a\n  Account ID:       0xb2f058a9109b934f779d56d527ec8ae2c078dda9d229b24b4d70ff6267fef66a\n  SS58 Address:     5G7Kn6q1We5K132PNVfgRkR3d1oyKNxXnryVmnXPxN19SrRv\n")])])]),s("p",[e._v("Let's inspect secret phrase first using GEEK's network ID:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('subkey inspect "wise spirit proof frame replace slot barely scorpion awesome slender vehicle tragic" -n geek\n\nSecret phrase `wise spirit proof frame replace slot barely scorpion awesome slender vehicle tragic` is account:\n  Secret seed:      0x39a12cfdabf457a33a61aeef2878fd08fc3a5bd6f0baaa3d05a89ebab704672c\n  Public key (hex): 0xb2f058a9109b934f779d56d527ec8ae2c078dda9d229b24b4d70ff6267fef66a\n  Account ID:       0xb2f058a9109b934f779d56d527ec8ae2c078dda9d229b24b4d70ff6267fef66a\n  SS58 Address:     2y19qHNjfwxbQgiiYFS8k2JGkrXD4AUZTEEUd4jUJhKvyavD\n')])])]),s("div",{staticClass:"tip custom-block"},[s("p",[e._v("\n    Note: Network ID/version in the output above is set to "),s("strong",[e._v("geek")])])]),e._v(" "),s("p",[e._v("You will see last line SS58 Address is your account address in GEEK Network, which is "),s("code",[e._v("2y19qHNjfwxbQgiiYFS8k2JGkrXD4AUZTEEUd4jUJhKvyavD")]),e._v(". Next let's inpsect "),s("code",[e._v("secret seed")]),e._v(" when generating Substrate account, that should display the same account address:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('subkey inspect "0x39a12cfdabf457a33a61aeef2878fd08fc3a5bd6f0baaa3d05a89ebab704672c" -n geek\n\nSecret Key URI `0x39a12cfdabf457a33a61aeef2878fd08fc3a5bd6f0baaa3d05a89ebab704672c` is account:\n  Secret seed:      0x39a12cfdabf457a33a61aeef2878fd08fc3a5bd6f0baaa3d05a89ebab704672c\n  Public key (hex): 0xb2f058a9109b934f779d56d527ec8ae2c078dda9d229b24b4d70ff6267fef66a\n  Account ID:       0xb2f058a9109b934f779d56d527ec8ae2c078dda9d229b24b4d70ff6267fef66a\n  SS58 Address:     2y19qHNjfwxbQgiiYFS8k2JGkrXD4AUZTEEUd4jUJhKvyavD\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);