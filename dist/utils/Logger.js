export default function log1(message) {
    const timestamp = new Date().toISOString();
    console.log(`*** [${timestamp}] ${message}`);
}
export function log2(message) {
    const timestamp = new Date().toISOString();
    console.log(`--- [${timestamp}] ${message}`);
}
export function log3(message) {
    const timestamp = new Date().toISOString();
    console.log(`+++ [${timestamp}] ${message}`);
}
