import { execSync } from "child_process"

export function getCommitHash() {
    try {
        return execSync("git rev-parse HEAD").toString().trim()
    } catch {
        return null
    }
}

export function getBranch() {
    try {
        return execSync("git rev-parse --abbrev-ref HEAD").toString().trim()
    } catch {
        return null
    }
}

export function getDate() {
    try {
        return execSync("git log -1 --format=%cI").toString().trim()
    } catch {
        return null
    }
}