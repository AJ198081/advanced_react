export function changeToSentenceCase(str: string, separator = '_') {
    return str.replace(new RegExp(separator, 'g'), ' ')
        .replace(/\b\w/g, character => character.toUpperCase());
}

changeToSentenceCase('hello_world');
