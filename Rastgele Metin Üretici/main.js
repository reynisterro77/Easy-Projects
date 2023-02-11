function generate(){
    var quotes={
        "- Albert Einstein":'"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it s beauty."',
        "- Pierce Brown, Red Rising":'Man cannot be freed by the same injustice that enslaved it',
        "- Deepak Chopra":'Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.',
        "- Alysha Speer":'You never really know what s coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity',
        "- Monique Duval":"She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky."
    }
    var authors=Object.keys(quotes);
    // console.log(authors);
    var author=authors[Math.floor(Math.random()*authors.length)];
    // console.log(author);
    var quote=quotes[author];
    // console.log(quote);

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;

}