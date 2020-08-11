/**
 * 

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

function pairElement(str) {

    //str split into seperate letter
    //set conditionals for each pairs or switch case 
    //places strings into an nested array 
    //sub arrays contain origin pair at 0 and missing pair at 1

    str = str.split("");

    const array = [];

    for (let i = 0; i < str.length; i++) {
        
        const demo = str[i].split("");

        const pair = demo[0] 

        switch (pair) {
            case "C":
                demo.push("G")
                break;
        
            case "G":
                demo.push("C")
                break;
                case "A":
                    demo.push("T")
                    break;
                case "T":
                    demo.push("A")
                    break;
        }

        array.push(demo);
        
    }

        return array
    
}
  
 console.log(pairElement("ATCGA"));
 
/**
pairElement("") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
 */