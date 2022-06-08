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
        // apiURL: "http://localhost:1337",
        // token: "a0185876ba21ee588db0e0dc4d8176f26fc71748ffff242a9fa3e8dc2dc118d4203763bf585fe84b59e7a857682dfc28b09d5d6900cf1da41b21eca1ebc34fdccf50fb959b70b0859ef7179cb2685a1aecda80cbc861b142fb09cdfdb619e64fbb2a96ffd2615da63ff473980333398b431e8d745eea5631cc14d92e7c00dc17",
        collectionTypes: ['article', 'author', 'category'],
        singleTypes: ['about', 'global'],
        preview: true,
        cache: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
