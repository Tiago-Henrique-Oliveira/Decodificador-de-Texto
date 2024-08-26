document.getElementById('decodeBtn').addEventListener('click', function() {
    const encodedText = document.getElementById('encodedText').value;
    const decodedText = rot13(encodedText);
    document.getElementById('decodedText').innerText = decodedText;
});

function rot13(str) {
    return str.replace(/[A-Za-z]/g, function(c) {
        return String.fromCharCode(
            ((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13)) ? c : c - 26
        );
    });
}