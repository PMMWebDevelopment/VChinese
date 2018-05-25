# VChinese

## Steps staken to build this project

* Installed Vue Material 1.0 beta for UI <https://vuematerial.io/>.

* Installed vue-tiny-pagination 0.2.1 for pagination widget <https://github.com/coderdiaz/vue-tiny-pagination>.

### Consulted the following websites for linguistic information to guide layout of site: -

* Character lists for passing HSK exam <http://hanzidb.org/character-list/hsk>.

* Installed pinyin-rest API 1.0.2 to convert characters into pinyin <https://github.com/pepebecker/pinyin-rest>.

* Installed hanzi-writer to provide character stroke-order animations and user challenges <https://chanind.github.io/hanzi-writer/docs.html>.

* Installed vue-resource 1.5.0 to handle HTTP requests <https://github.com/pagekit/vue-resource>.

* Installed firebase 4.12.1 and vuefire 1.4.5.

* Installed vuex 3.0.1 and es6-promise 4.2.4 to handle inter-component data sharing.

* Installed pastebin-js 0.5.1 to handle calls to Pastebin account containing raw text for grammar examples and commentary <https://github.com/j3lte/pastebin-js>.

* Added Firebase authentication: users can now bookmark their last visited grammar point page and thereby track progress.

* Installed loader-spinners for Grammar and Writing HSK pages and for individual Grammar Point and Character pages.

* Improved UI on Character pages by means of media queries and character sizes based on view widths.

* Installed babel-plugin-syntax-dynamic-import 6.18.0 to enable lazy loading.

* Introduced lazy loading to improve performance. The five resulting chunks now come in at: -

    - Main
    - GrammarHSKPage
    - GrammarPointPage
    - WritingHSKPage
    - CharacterPage

* Set mode in router/index.js to "history" to ensure clean URL's (no hash).

* The only remaining step is now to write examples for Grammar Lessons 101 to 224 covering part of Grammar Section 2 and the whole of Grammar Section 3. Commentaries now written to back-end Pastebin files which can be drawn down via Pastebin's API.
