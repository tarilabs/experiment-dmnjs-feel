
export class EvalHelper {
    static regex = new RegExp("[\\s\u00A0]+");
    
    public static normalizeVariableName(name : string): string {
        const trimmed = name.trim();
        return trimmed.replace(this.regex, "");
    }
}