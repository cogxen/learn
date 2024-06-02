export default [
  {
    label: "Welcome",
    items: [
      { label: "Introduction", link: "/" },
      { label: "About Us", link: "/about-us" },
      {
        label: "How to Contribute?",
        badge: { text: "Soon", variant: "success" },
        link: "/how-to-contribute",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Datasets",
        items: [
          {
            label: "Global Stock Price",
            link: "https://github.com/cogxen/datasets/tree/main/global-stock-price",
            attrs: { target: "_blank" },
          },
          {
            label: "Market Size of EVs",
            link: "https://github.com/cogxen/datasets/tree/main/market-size-of-evs",
            attrs: { target: "_blank" },
          },
          {
            label: "Website Performance",
            link: "https://github.com/cogxen/datasets/tree/main/website-performance",
            attrs: { target: "_blank" },
          },
          {
            label: "UK Gender Pay Gap (2018-2023)",
            link: "https://github.com/cogxen/datasets/tree/main/uk-gender-pay-gap-2018-2023",
            badge: { text: "New", variant: "note" },
            attrs: { target: "_blank" },
          },
        ],
      },
    ],
  },
]
