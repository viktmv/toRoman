function convertToRoman(num) {
    if (num >= 10000) return 'Number should be less than 10000'
    if (num > 1000) return romanify10000(num)
    if (num > 100) return romanify1000(num)
    if (num > 10) return romanify100(num)
    return romanify10(num)    

    function multiply(num, char) {
        let str = '';
        while (num--) str += char
        return str    
    }

    function romanify10(num) {
        if (num < 10) {
            if (num == 0) return ''
            else if (num < 4)   num = multiply(num, 'I')
            else if (num == 4)  num = 'IV'    
            else if (num < 9)   num = 'V' + multiply((num - 5), 'I' ) 
            else if (num == 9)  num = 'IX'    
        }    
        return num
    }

    function romanify100(num) {
        num += ''
        num = num.split('')

        let first = num[0]
          , second = num[1]

        if (first < 4)       first = multiply(first, 'X')
        else if (first == 4) first = 'XL'
        else if (first < 9)  first = 'L' + multiply((first - 5), 'X')  
        else if (first == 9) first = 'XC'    

        return first + romanify10(second)  
    }

    function romanify1000(num) {
        num += ''
        num = num.split('')

        let first = num.shift()
          , rest = num.join('')

        if (first < 4)       first = multiply(first, 'C')
        else if (first == 4) first = 'CD'
        else if (first < 9)  first = 'D' + multiply((first - 5), 'C')  
        else if (first == 9) first = 'CM'    

        return first + romanify100(rest)
    }

    function romanify10000(num) {   
        num += ''
        num = num.split('')

        let first = num.shift()
          , rest = num.join('')

        first = multiply(first, 'M')

        return first + romanify1000(rest)
    }
}