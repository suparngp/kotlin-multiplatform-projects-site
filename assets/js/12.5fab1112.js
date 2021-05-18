(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{217:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("Below is an overall list of steps which we'd take to integrate "),s("code",[t._v("suparnatural-graphql")]),t._v(" in a "),s("code",[t._v("Kotlin Multiplatform")]),t._v(" project.")]),t._v(" "),s("ol",[s("li",[t._v("Configure "),s("a",{attrs:{href:"https://github.com/Kotlin/kotlinx.serialization#setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("kotlinx.serialization"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Apply the "),s("code",[t._v("graphql-plugin")]),t._v(".")]),t._v(" "),s("li",[t._v("Configure the plugin with options like "),s("code",[t._v("GraphQL")]),t._v(" server "),s("code",[t._v("endpoint")]),t._v(" to fetch "),s("code",[t._v("schema")]),t._v(".")]),t._v(" "),s("li",[t._v("Add common and platform specific "),s("code",[t._v("graphql")]),t._v(" dependencies to the project.")]),t._v(" "),s("li",[t._v("Add "),s("code",[t._v("rx")]),t._v(" runtime provider.")])]),t._v(" "),s("h2",{attrs:{id:"kotlinx-serialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kotlinx-serialization"}},[t._v("#")]),t._v(" Kotlinx Serialization")]),t._v(" "),s("p",[t._v("To parse "),s("code",[t._v("JSON")]),t._v(", this library depends on "),s("a",{attrs:{href:"https://github.com/Kotlin/kotlinx.serialization",target:"_blank",rel:"noopener noreferrer"}},[t._v("kotlinx.serialization"),s("OutboundLink")],1),t._v(". Follow this "),s("a",{attrs:{href:"https://github.com/Kotlin/kotlinx.serialization#setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("guide"),s("OutboundLink")],1),t._v(" to configure it.")]),t._v(" "),s("h2",{attrs:{id:"apply-gradle-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-gradle-plugin"}},[t._v("#")]),t._v(" Apply Gradle Plugin")]),t._v(" "),s("p",[t._v("Configure "),s("code",[t._v("buildscript")]),t._v(" section of your "),s("code",[t._v("build.gradle.kts")]),t._v(" or "),s("code",[t._v("build.gradle")]),t._v(" with following.")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("buildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("classpath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.suparnatural.kotlin:graphql-plugin:1.0.12"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.suparnatural.plugins.graphql"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("buildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.suparnatural.kotlin:graphql-plugin:1.0.0"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\napply plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.suparnatural.kotlin.graphql"')]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"configure-gradle-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-gradle-plugin"}},[t._v("#")]),t._v(" Configure Gradle Plugin")]),t._v(" "),s("p",[t._v("Add the following to your "),s("code",[t._v("build.gradle.kts")]),t._v(" or "),s("code",[t._v("build.gradle")]),t._v(" file")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("suparnaturalGraphQl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    packageName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.myapp.graphql.models"')]),t._v("\n    endpointUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://countries.trevorblades.com"')]),t._v("\n    documentsPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"operations/*.gql"')]),t._v("\n    outputDirectoryPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/main/kotlin"')]),t._v("\n    headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("suparnaturalGraphQl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    packageName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.myapp.graphql.models"')]),t._v("\n    endpointUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"https://countries.trevorblades.com"')]),t._v("\n    documentsPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"operations/*.gql"')]),t._v("\n    outputDirectoryPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"src/main/kotlin"')]),t._v("\n    headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Authorization: abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("packageName")])]),t._v(" "),s("td",[t._v("Generated type files will have this as the package name")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("endpointUrl")])]),t._v(" "),s("td",[t._v("GraphQL endpoint URL to pull schema from. This takes precedence over "),s("code",[t._v("localSchemaFilePath")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("localSchemaFilePath")])]),t._v(" "),s("td",[t._v("Path to local schema file if "),s("code",[t._v("endpointUrl")]),t._v(" is not used")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("documentsPath")])]),t._v(" "),s("td",[t._v("Glob pattern to the directory which contains graphql query files")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("outputDirectoryPath")])]),t._v(" "),s("td",[t._v("Generated types will be placed under this directory")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("headers")])]),t._v(" "),s("td",[t._v("Additional headers to be passed while downloading schema")])])])]),t._v(" "),s("h2",{attrs:{id:"add-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-library"}},[t._v("#")]),t._v(" Add Library")]),t._v(" "),s("p",[t._v("Add the maven repository to "),s("code",[t._v("repositories")]),t._v(" block.")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Add the following to your commonMain target.")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("commonMain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("implementation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.suparnatural.kotlin:graphql:version"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("commonMain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        implementation "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.suparnatural.kotlin:graphql:version"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("p",[t._v("With the hierarchical project structure, you generally need to add the dependency to "),s("code",[t._v("commonMain")]),t._v(" only. Other targets are also available in case you need to override this behavior.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Platform")]),t._v(" "),s("th",[t._v("Depdendency")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Common")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:graphql-metadata:version")])]),t._v(" "),s("tr",[s("td",[t._v("Android-Debug")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:graphql-android-debug:version")])]),t._v(" "),s("tr",[s("td",[t._v("Android-Release")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:graphql-android:version")])]),t._v(" "),s("tr",[s("td",[t._v("iOS-Arm64")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:graphql-iosarm64:version")])]),t._v(" "),s("tr",[s("td",[t._v("iOS-X64")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:graphql-iosx64:version")])]),t._v(" "),s("tr",[s("td",[t._v("JVM")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:graphql-jvm:version")])])])]),t._v(" "),s("p",[t._v("Finally, run the gradle task "),s("code",[t._v("graphQlCodeGen")]),t._v(" under group "),s("code",[t._v("suparnatural")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"rx-runtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rx-runtime"}},[t._v("#")]),t._v(" RX Runtime")]),t._v(" "),s("p",[t._v("The response from "),s("code",[t._v("GraphQL")]),t._v(" is exposed as an "),s("a",{attrs:{href:"http://reactivex.io/documentation/observable.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Observable"),s("OutboundLink")],1),t._v(" and therefore, the library needs an "),s("code",[t._v("RX")]),t._v(" runtime. The "),s("code",[t._v("RxRuntimeProvider")]),t._v(" class provides the "),s("code",[t._v("RX")]),t._v(" runtime to the rest of the library. A minimal "),s("code",[t._v("RX")]),t._v(" runtime is provided by "),s("code",[t._v("suparnatural:rx-runtime-reaktive")]),t._v(" package which uses "),s("a",{attrs:{href:"https://github.com/badoo/Reaktive",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reaktive"),s("OutboundLink")],1),t._v(" internally. Add the following code to "),s("code",[t._v("build.gradle")]),t._v(" to include the required repository.")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maven")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://dl.bintray.com/badoo/maven"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"https://dl.bintray.com/badoo/maven"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Next, configure each source set with the appropriate dependency")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Platform")]),t._v(" "),s("th",[t._v("Depdendency")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Common")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-runtime-reaktive-metadata:version")])]),t._v(" "),s("tr",[s("td",[t._v("Android-Debug")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-runtime-reaktive-android-debug:version")])]),t._v(" "),s("tr",[s("td",[t._v("Android-Release")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-runtime-reaktive-android:version")])]),t._v(" "),s("tr",[s("td",[t._v("iOS-Arm64")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-runtime-reaktive-iosarm64:version")])]),t._v(" "),s("tr",[s("td",[t._v("iOS-X64")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-runtime-reaktive-iosx64:version")])]),t._v(" "),s("tr",[s("td",[t._v("JVM")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-runtime-reaktive-jvm:version")])])])]),t._v(" "),s("p",[t._v("Next, initialize the runtime in your application")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    RxRuntimeProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("observableFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReaktiveObservableFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    RxRuntimeProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publishSubjectFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReaktivePublishSubjectFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"custom-rx-runtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-rx-runtime"}},[t._v("#")]),t._v(" Custom RX Runtime")]),t._v(" "),s("p",[t._v("If you are already using an "),s("code",[t._v("rx")]),t._v(" library or you want more than "),s("code",[t._v("rx-runtime-reaktive")]),t._v(", you can also provide your custom runtime. Add the "),s("code",[t._v("rx")]),t._v(" definition as a dependency so that you can access the right interfaces. As before, pick the right dependency for the target and add it to the source set.")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("commonMain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("implementation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.suparnatural.kotlin:rx:version"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("commonMain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        implementation "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"com.suparnatural.kotlin:rx:version"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Platform")]),t._v(" "),s("th",[t._v("Depdendency")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Common")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-metadata:version")])]),t._v(" "),s("tr",[s("td",[t._v("Android-Debug")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-android-debug:version")])]),t._v(" "),s("tr",[s("td",[t._v("Android-Release")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-android:version")])]),t._v(" "),s("tr",[s("td",[t._v("iOS-Arm64")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-iosarm64:version")])]),t._v(" "),s("tr",[s("td",[t._v("iOS-X64")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-iosx64:version")])]),t._v(" "),s("tr",[s("td",[t._v("JVM")]),t._v(" "),s("td",[t._v("suparnatural-kotlin-multiplatform:rx-jvm:version")])])])]),t._v(" "),s("p",[t._v("Next, initialize the runtime in your application")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    RxRuntimeProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("observableFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomObservableFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    RxRuntimeProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publishSubjectFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomPublishSubjectFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);