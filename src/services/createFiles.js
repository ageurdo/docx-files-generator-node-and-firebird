const officegen = require('officegen')
const fs = require('fs')
const { getFormattedDate } = require('./helper.js'); // Importar helper.js
const path = require('path');

// Create an empty Word object:
let docx = officegen('docx')

// Officegen calling this function after finishing to generate the docx document:
docx.on('finalize', function (written) { console.log('Finish to create a Microsoft Word document.') })

// Officegen calling this function to report errors:
docx.on('error', function (err) { console.log(err) })

let data = {

}

// Create a new paragraph:
let pObj = docx.createP()
// We can even add images:
pObj.addImage(path.join(__dirname, '../assets/logo.png'));

pObj = docx.createP({ align: 'center' })

pObj.addText('AUTORIZAÇÃO PARA USO DE DADOS E MARCA',
    { font_face: 'Arial', font_size: 14, align: 'center', bold: true })

pObj = docx.createP({ align: 'justify' })
pObj.addText(`A presente Autorização para Uso de Dados e Marca (doravante denominado “AUTORIZAÇÃO”) é celebrado, em ${getFormattedDate()} (a “Data de Assinatura”).`,
    { font_size: 12 })

pObj = docx.createP({ align: 'justify' })

pObj.addText(`[PARCEIRO], pessoa jurídica de direito privado, com sede na cidade de [*], Estado de [*], com sede em [endereço completo], inscrita no CNPJ/ME sob o nº [*], neste ato representada por seu representante legal abaixo assinado (doravante denominada “CONCEDENTE”), concede neste ato, à MEGABIT LOCAÇAO DE SOFTWARE LTDA., sociedade empresária limitada inscrita no CNPJ/ME sob nº 01.197.206/0001-16, situada no Município de Foz do Iguaçu, Estado do Paraná, na Av. República Argentina, 3370, 2º Andar, Sala 09, Jardim Panorama (“Megabit) uma autorização de uso e reprodução de seus dados, tais como denominação, nome fantasia, endereço, telefone, e-mail para contato, e logomarca protegidos pelas normas de Propriedade Intelectual e Proteção de Dados vigentes no Brasil para fins exclusivos de divulgação no website da MEGABIT`,
    { font_size: 12 })
pObj = docx.createP({ align: 'justify' })

pObj.addText(`A CONCEDENTE ressalva que a MEGABIT somente poderá ceder, transferir ou sublicenciar a terceiros a autorização de uso de dados de logomarca da titularidade da CONCEDENTE, com a expressa anuência da CONCEDENTE.`,
    { font_size: 12 })
pObj = docx.createP({ align: 'justify' })

pObj.addText(`A presente Autorização é celebrada a título gratuito, não incidindo à CONCEDENTE ou a MEGABIT quaisquer ônus, custos, repasses orçamentários ou dispêndio pecuniário, a qualquer título, bem como não implica na cessão ou transferência de quaisquer direitos de propriedade intelectual da CONCEDENTE à MEGABIT.`,
    { font_size: 12 })
pObj = docx.createP({ align: 'justify' })

pObj.addText(`A MEGABIT não detém participação societária na CONCEDENTE e, da mesma forma, a CONCEDENTE não detém participação societária na MEGABIT, de forma que esta Autorização não institui sociedade empresária ou qualquer vínculo societário similar entre CONCEDENTE e MEGABIT. A CONCEDENTE não é representante legal ou agente da MEGABIT e, da mesma forma, a MEGABIT também não é representante legal ou agente da CONCEDENTE e, portanto, estas não poderão assumir ou criar qualquer espécie adicional de obrigação, representação, garantia ou fiança, expressa ou implícita, em nome da outra.`,
    { font_size: 12 })
pObj = docx.createP({ align: 'justify' })

pObj.addText(`A presente Autorização entra em vigor a partir da sua Data de Assinatura e vigorará por prazo indeterminado. A CONCEDENTE poderá revogar esta Autorização, a qualquer momento, e de pleno direito independentemente de interpelação judicial ou extrajudicial, mediante aviso prévio por escrito de 30 (trinta) dias de antecedência à MEGABIT, independentemente do motivo.`,
    { font_size: 12 })
pObj = docx.createP({ align: 'justify' })

pObj.addText(`Dados autorizados pela CONCEDENTE para divulgação:`)
pObj.addText(`Logo Marca (a ser disponibilizada em formato adequado)`)
pObj.addText(`Nome Comercial ou Fantasia da CONCEDENTE: (Indicar o nome da forma que a CONCEDEDENTE deseja sua divulgação)`)
pObj.addText(`Endereço completo: (Logradouro, número, bairro, cidade e estado)`)
pObj.addText(`Tel de contato: (ddd + número)`)
pObj.addText(`e-mail de contato: (e-mail)`)

pObj = docx.createP({ align: 'justify' })
pObj.addText(`Esta Autorização é celebrada, regida e interpretada de acordo com as leis da República Federativa do Brasil.`)
pObj.addText(``)
pObj.addText(``)

pObj = docx.createP({ align: 'center' })
pObj.addText(`___________________________________________________________`)
pObj.addLineBreak()
pObj.addText(`[PARCEIRO`)
pObj.addLineBreak()
pObj.addText(`Nome:`)
pObj.addLineBreak()
pObj.addText(`Cargo:`)

// pObj.addText(' with color', { color: '000088' })
// pObj.addText(' and back color.', { color: '00ffff', back: '000088' })

// pObj = docx.createP()

// pObj.addText('Since ')
// pObj.addText('officegen 0.2.12', {
//     back: '00ffff',
//     shdType: 'pct12',
//     shdColor: 'ff0000'
// }) // Use pattern in the background.
// pObj.addText(' you can do ')
// pObj.addText('more cool ', { highlight: true }) // Highlight!
// pObj.addText('stuff!', { highlight: 'darkGreen' }) // Different highlight color.

// pObj = docx.createP()

// pObj.addText('Even add ')
// pObj.addText('external link', { link: 'https://github.com' })
// pObj.addText('!')

// pObj = docx.createP()

// pObj.addText('Bold + underline', { bold: true, underline: true })

// pObj = docx.createP({ align: 'center' })

// pObj.addText('Center this text', {
//     border: 'dotted',
//     borderSize: 12,
//     borderColor: '88CCFF'
// })

// pObj = docx.createP()
// pObj.options.align = 'right'

// pObj.addText('Align this text to the right.')

// pObj = docx.createP()

// pObj.addText('Those two lines are in the same paragraph,')
// pObj.addLineBreak()
// pObj.addText('but they are separated by a line break.')

// docx.putPageBreak()

// pObj = docx.createP()

// pObj.addText('Fonts face only.', { font_face: 'Arial' })
// pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 })

// docx.putPageBreak()

// pObj = docx.createP()




// Let's generate the Word document into a file:
let out = fs.createWriteStream(path.join(__dirname, '../../output/example1.docx'))

out.on('error', function (err) {
    console.log(err)
})

// Async call to generate the output file:
docx.generate(out)