initSidebarItems({"enum":[["AnnotationKind",""],["AssistKind",""],["AssistResolveStrategy","A way to control how many asssist to resolve during the assist resolution. When an assist is resolved, its edits are calculated that might be costly to always do by default."],["CompletionItemKind",""],["Direction",""],["Edition",""],["FileSystemEdit",""],["FoldKind",""],["HlMod",""],["HlOperator",""],["HlPunct",""],["HlTag",""],["HoverAction",""],["HoverDocFormat",""],["InlayKind",""],["InsertTextFormat",""],["PrimeCachesProgress",""],["ReferenceAccess",""],["RunnableKind",""],["Severity",""],["StructureNodeKind",""],["SymbolKind",""],["TestId",""]],"struct":[["Analysis","Analysis is a snapshot of a world state at a moment in time. It is the main entry point for asking semantic information about the world. When the world state is advanced using `AnalysisHost::apply_change` method, all existing `Analysis` are canceled (most method return `Err(Canceled)`)."],["AnalysisHost","`AnalysisHost` stores the current state of the world."],["Annotation",""],["AnnotationConfig",""],["Assist",""],["AssistConfig",""],["AssistId","Unique identifier of the assist, should not be shown to the user directly."],["CallInfo","Contains information about a call site. Specifically the `FunctionSignature`and current parameter."],["CallItem",""],["Cancelled","A panic payload indicating that a salsa revision was cancelled."],["Change","Encapsulate a bunch of raw `.set` calls on the database."],["CompletionConfig",""],["CompletionItem","`CompletionItem` describes a single completion variant in the editor pop-up. It is basically a POD with various properties. To construct a `CompletionItem`, use `new` method and the `Builder` struct."],["CompletionRelevance",""],["CrateGraph","`CrateGraph` is a bit of information which turns a set of text files into a number of Rust crates."],["CrateId",""],["Diagnostic",""],["DiagnosticsConfig",""],["Documentation","Holds documentation"],["ExpandedMacro",""],["FileId","Handle to a file in [`Vfs`]"],["FilePosition",""],["FileRange",""],["Fold",""],["Highlight",""],["HlMods",""],["HlRange",""],["HoverConfig",""],["HoverGotoTypeData",""],["HoverResult","Contains the results when hovering over an item"],["ImportEdit","An extra import to add after the completion is applied."],["Indel","`InsertDelete` – a single “atomic” change to text"],["InlayHint",""],["InlayHintsConfig",""],["Label","A type to specify UI label, like an entry in the list of assists. Enforces proper casing:"],["LineCol",""],["LineColUtf16",""],["LineIndex",""],["Markup",""],["NavigationTarget","`NavigationTarget` represents an element in the editor’s UI which you can click on to navigate to a particular piece of code."],["Query",""],["RangeInfo","Info associated with a text range."],["ReferenceSearchResult",""],["RenameError",""],["RootDatabase",""],["Runnable",""],["SearchScope","Generally, `search_scope` returns files that might contain references for the element. For `pub(crate)` things it’s a crate, for `pub` things it’s a crate and dependant crates. In some cases, the location of the references is known to within a `TextRange`, e.g. for things like local variables."],["Semantics","Primary API to get semantic information, like types, from syntax trees."],["SingleResolve","Hold the [`AssistId`] data of a certain assist to resolve. The original id object cannot be used due to a `'static` lifetime and the requirement to construct this struct dynamically during the resolve handling."],["SourceChange",""],["SourceRoot",""],["SourceRootId","Files are grouped into source roots. A source root is a directory on the file systems which is watched for changes. Typically it corresponds to a Rust crate. Source roots might be nested: in this case, a file belongs to the nearest enclosing source root. Paths to files are always relative to a source root, and the analyzer does not know the root path of the source root at all. So, a file from one source root can’t refer to a file in another source root by path."],["SsrError",""],["StructureNode",""],["TextEdit",""],["TextRange","A range in text, represented as a pair of [`TextSize`][struct@TextSize]."],["TextSize","A measure of text length. Also, equivalently, an index into text."]],"type":[["Cancellable",""]]});