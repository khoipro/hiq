<template>
    <div class="code-example">
        <slot></slot>
    </div>
</template>

<style>
    .code-example {
        margin: 1.5rem 0;
        padding: var(--hiq-pre-padding-vertical) var(--hiq-pre-padding-horizontal);
        border: 1px solid var(--hiq-pre-border-color);
        border-radius: var(--hiq-pre-border-radius);
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .code-example + div[class*="language-"] {
        margin-top: -1px;
    }

    .code-example + div[class*="language-"] pre {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    .code-example button:not(:last-child),
    .code-example [role="button"]:not(:last-child) {
        margin: 0 0.35rem 0.35rem 0;
    }

    .code-example p:last-of-type,
    .code-example ul:last-of-type,
    .code-example ol:last-of-type,
    .code-example dl:last-of-type {
        margin-bottom: 0;
    }

    .code-example blockquote,
    .code-example details,
    .code-example fieldset,
    .code-example figure,
    .code-example pre,
    .code-example table {
        margin: 0;
    }

    @media (max-width: 419px) {
        .code-example {
            margin-right: -1.5rem;
            margin-left: -1.5rem;
            border-right: 0;
            border-left: 0;
            border-radius: 0;
        }
    }
</style>
