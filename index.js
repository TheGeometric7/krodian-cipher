const characterMap = { "a": "@", "b": ":", "c": "(", "d": ")", "e": "€", "f": "£", "g": "~", "h": "[", "i": "*", "j": "”", "k": ";", "l": "|", "m": "{", "n": "}", "o": "0", "p": ">", "q": "<", "r": ",", "s": "$", "t": "+", "u": "%", "v": "•", "w": "_", "x": "x", "y": "¥", "z": "=", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "0": "0", " ": " " };
const reverseCharacterMap = Object.fromEntries(
    Object.entries(characterMap).map(([key, value]) => [value, key])
);
const inputBox = document.getElementById("inputBox");
const outputBox = document.getElementById("outputBox");
const copyOutput = document.getElementById("copyOutput");
function transformText(source, target, map) {
    const lines = source.value.split("\n");
    const transformedLines = lines.map(line => {
        let transformedLine = "";
        for (const char of line) {
            transformedLine += map[char.toLowerCase()] || "";
        }
        return transformedLine;
    });
    target.value = transformedLines.join("\n");
}
async function copyToClipboard(element) {
    try {
        await navigator.clipboard.writeText(element.value);
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}
inputBox.addEventListener("input", () => {
    transformText(inputBox, outputBox, characterMap);
});
outputBox.addEventListener("input", () => {
    transformText(outputBox, inputBox, reverseCharacterMap);
});
copyOutput.addEventListener("click", () => {
    copyToClipboard(outputBox);
});