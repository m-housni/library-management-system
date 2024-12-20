export default function log1(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`*** [${timestamp}] ${message}`);
}

export function log2(message: string): void {
  const timestamp = new Date().toISOString();
  console.log(`--- [${timestamp}] ${message}`);
}

export function log3(message: string): void {
  const timestamp = new Date().toISOString();
  console.log(`+++ [${timestamp}] ${message}`);
}


  