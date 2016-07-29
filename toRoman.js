function convertToRoman(num) {
    if (num >= 10000) throw new RangeError('Number should be less than 10000')
    if (num >= 1000) return romanify10000(num)
    if (num >= 100) return romanify1000(num)
    if (num >= 10) return romanify100(num)
    return romanify10(num)

    function romanify10(num) {
        if (num < 10) {
            if (num == 0) return ''
            else if (num < 4)   num = 'I'.repeat(num)
            else if (num == 4)  num = 'IV'
            else if (num < 9)   num = 'V' + 'I'.repeat(num - 5) 
            else if (num == 9)  num = 'IX'
        }    
        return num
    }

    function romanify100(num) {
        let [first, second] = `${num}`.split('')

        if (first < 4)       first = 'X'.repeat(first)
        else if (first == 4) first = 'XL'
        else if (first < 9)  first = 'L' + 'X'.repeat(first - 5)
        else if (first == 9) first = 'XC'    

        return first + romanify10(second)  
    }

    function romanify1000(num) {
        num = `${num}`.split('')

        let first = num.shift()
          , rest = num.join('')

        if (first < 4)       first = 'C'.repeat(first)
        else if (first == 4) first = 'CD'
        else if (first < 9)  first = 'D' + 'C'.repeat(first - 5)
        else if (first == 9) first = 'CM'    

        return first + romanify100(rest)
    }

    function romanify10000(num) {
        num = `${num}`.split('')

        let first = num.shift()
          , rest = num.join('')

        first = 'M'.repeat(first)

        return first + romanify1000(rest)
    }
}
