require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://allianzfoundationbackend.herokuapp.com",
        token: "5de6c6aad33be64a8075093d16df49bce45db2013febca7914c15f3e7385263f9a695657e38842a79eb456993fc6f9bf79e2f7b466d3428560b4085cac88985be3e2edef108a54962a3831d1aebf9eb6e08b9cc8adb28d4309febc6094063127f8dbab8eb90e4de1a731332c4a8b02568820890f88657bd07945a6bbd9cae873",
        collectionTypes: ['article', 'author', 'category'],
        singleTypes: ['about', 'global'],
        preview: true,
        headers: {},
        cache: false,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
