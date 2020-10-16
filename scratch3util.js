class scratchutil {
    getInfo() {
        return {
            "id": "scratchutil",
            "name": "Scratch Utilities",
            "blocks": [{
                    "opcode": "openURL",
                    "blockType": "reporter",
                    "text": "open secure URL [address] in new window",
                    "arguments": {
                        "address": {
                            "type": "string",
                            "defaultValue": "scratch.mit.edu"
                        }
                    }
            }],
        "menus": {}
    };
}
Scratch.extensions.register(new scratchutil());
