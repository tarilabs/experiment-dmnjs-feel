
export class EvalHelper {
    static regex = new RegExp("[\\s\u00A0]+");
    
    public static normalizeVariableName(name : string): string {
        const trimmed = name.trim();
        return trimmed.replace(this.regex, " ");
    }

    public static unescapeString(text: string) : string {
        if(text == null) {
            throw Error("Illegal state.");
            // impossible if strict null check is enabled return null;
        }
        if(text.length >= 2 && /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(text, "\"") && /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(text, "\"")) {
            text = text.substring(1, text.length - 1);
        }
        if(text.indexOf('\\') >= 0) {
            let r : { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            for(let i : number = 0; i < text.length; i++) {{
                let c : string = text.charAt(i);
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                    if(text.length > i + 1) {
                        i++;
                        let cn : string = text.charAt(i);
                        switch((cn).charCodeAt(0)) {
                        case 98 /* 'b' */:
                            /* append */(sb => { sb.str = sb.str.concat(<any>'\b'); return sb; })(r);
                            break;
                        case 116 /* 't' */:
                            /* append */(sb => { sb.str = sb.str.concat(<any>'\t'); return sb; })(r);
                            break;
                        case 110 /* 'n' */:
                            /* append */(sb => { sb.str = sb.str.concat(<any>'\n'); return sb; })(r);
                            break;
                        case 102 /* 'f' */:
                            /* append */(sb => { sb.str = sb.str.concat(<any>'\f'); return sb; })(r);
                            break;
                        case 114 /* 'r' */:
                            /* append */(sb => { sb.str = sb.str.concat(<any>'\r'); return sb; })(r);
                            break;
                        case 34 /* '\"' */:
                            /* append */(sb => { sb.str = sb.str.concat(<any>'\"'); return sb; })(r);
                            break;
                        case 39 /* '\'' */:
                            /* append */(sb => { sb.str = sb.str.concat(<any>'\''); return sb; })(r);
                            break;
                        case 92 /* '\\' */:
                            /* append */(sb => { sb.str = sb.str.concat(<any>'\\'); return sb; })(r);
                            break;
                        case 117 /* 'u' */:
                            if(text.length >= i + 5) {
                                let hex : string = text.substring(i + 1, i + 5);
                                /* append */(sb => { sb.str = sb.str.concat(<any>/* toChars */String.fromCharCode(/* parseInt */parseInt(hex, 16))); return sb; })(r);
                                i += 4;
                            } else {
                                /* append */(sb => { sb.str = sb.str.concat(<any>cn); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"\\"); return sb; })(r));
                            }
                            break;
                        case 85 /* 'U' */:
                            if(text.length >= i + 7) {
                                let hex : string = text.substring(i + 1, i + 7);
                                /* append */(sb => { sb.str = sb.str.concat(<any>/* toChars */String.fromCharCode(/* parseInt */parseInt(hex, 16))); return sb; })(r);
                                i += 6;
                            } else {
                                /* append */(sb => { sb.str = sb.str.concat(<any>cn); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"\\"); return sb; })(r));
                            }
                            break;
                        default:
                            /* append */(sb => { sb.str = sb.str.concat(<any>cn); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>"\\"); return sb; })(r));
                        }
                    } else {
                        /* append */(sb => { sb.str = sb.str.concat(<any>c); return sb; })(r);
                    }
                } else {
                    /* append */(sb => { sb.str = sb.str.concat(<any>c); return sb; })(r);
                }
            };}
            text = /* toString */r.str;
        }
        return text;
    }
}