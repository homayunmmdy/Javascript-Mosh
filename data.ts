import { CardsType , DSACardsType } from "./types/collection";

export const Cardsdata: CardsType[] = [
  {
    id: "1",
    title: "multi-language website",
    url: "https://github.com/homayunmmdy/Multi-language/assets/129702378/6e858b12-9e1a-4d1f-9e50-edd2a4371859",
    tools: ["nextjs", "i18", "tailwindcss", "typescripts"],
    live_demo: "https://multi-language-chi.vercel.app/pt",
    source_code: "https://github.com/homayunmmdy/Multi-language",
  },
  {
    id: "2",
    title: "redux sample",
    url: "https://github.com/homayunmmdy/Update-state-redux/assets/129702378/3eaf45fe-0c4c-44fb-b572-b6c44a454306",
    tools: ["reactjs", "redux","redux-tool-kit", "tailwindcss","javascript"],
    live_demo: "https://update-state-redux.vercel.app/",
    source_code: "https://github.com/homayunmmdy/Update-state-redux",
  },
  {
    id: "3",
    title: "simple Unite testing and mock",
    imageurl: "https://github.com/homayunmmdy/Unite-Mock-Testing/assets/129702378/2536a032-30d4-45d2-82ea-f87c38ea81ef",
    tools: ["reactjs", "jest", "css","javascript"],
    live_demo: "https://unite-mock-testing.vercel.app/",
    source_code: "https://github.com/homayunmmdy/Unite-Mock-Testing",
  },
  {
    id: "4",
    title: "Simple Axios data fetching",
    imageurl: "https://github.com/homayunmmdy/data-fetching-axios/assets/129702378/49400ca9-ee39-4a4d-b34c-07b61bb3cbd4",
    tools: ["reactjs", "axios", "tailwind","typescript"],
    live_demo: "https://data-fetching-axios-beta.vercel.app/",
    source_code: "https://github.com/homayunmmdy/data-fetching-axios",
  }
];
export const DSACardsdata: DSACardsType[] = [
  {
    id: "1",
    title: "Binary Search",
    imageurl: "https://github.com/homayunmmdy/Python/assets/129702378/26083279-e48e-4928-b547-38060e545732",
    explanation:
     "In computer science, binary search, also known as half-interval search,[1] logarithmic search,[2] or binary chop,[3] is a search algorithm that finds the position of a target value within a sorted array.[4][5] Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.",
    source_code: `def binary_search(arr, target):
    start = 0
    end = len(arr) - 1

    while start <= end:
        mid = (start + end) // 2
        current = arr[mid]

        if current == target:
            return mid
        if current > target:
            end = mid - 1
        else:
            start = mid + 1

    return -1 

arr = [20,30,40,60,80,90]
ans = binary_search(arr,80)


if ans  == -1:
    print("Target Not Found")
else:
    print("Target found at index",ans)`,
  },
];
