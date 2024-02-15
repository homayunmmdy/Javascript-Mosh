import { CardsType, DSACardsType } from "./types/collection";

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
    tools: ["reactjs", "redux", "redux-tool-kit", "tailwindcss", "javascript"],
    live_demo: "https://update-state-redux.vercel.app/",
    source_code: "https://github.com/homayunmmdy/Update-state-redux",
  },
  {
    id: "3",
    title: "simple Unite testing and mock",
    imageurl:
      "https://github.com/homayunmmdy/Unite-Mock-Testing/assets/129702378/2536a032-30d4-45d2-82ea-f87c38ea81ef",
    tools: ["reactjs", "jest", "css", "javascript"],
    live_demo: "https://unite-mock-testing.vercel.app/",
    source_code: "https://github.com/homayunmmdy/Unite-Mock-Testing",
  },
  {
    id: "4",
    title: "Simple Axios data fetching",
    imageurl:
      "https://github.com/homayunmmdy/data-fetching-axios/assets/129702378/49400ca9-ee39-4a4d-b34c-07b61bb3cbd4",
    tools: ["reactjs", "axios", "tailwind", "typescript"],
    live_demo: "https://data-fetching-axios-beta.vercel.app/",
    source_code: "https://github.com/homayunmmdy/data-fetching-axios",
  },
  {
    id: "5",
    title: "Device Battery Dectector",
    imageurl:
      "https://media.licdn.com/dms/image/D4D12AQGkRh_DmHvbHw/article-cover_image-shrink_423_752/0/1707681642183?e=1713398400&v=beta&t=XVpJX5jrainGX5ycpFfIJWE9cS7UiN-Xr-O8yJ5aRPc",
    tools: ["reactjs", "tailwind", "typescript"],
    demo: "https://github.com/homayunmmdy/Projects/assets/129702378/8c3d654f-0560-49d5-87ee-a52bb3a017aa",
    source_code:
      "https://github.com/homayunmmdy/Projects/tree/master/Device%20Battery%20Dectector",
  },
  {
    id: "6",
    title: "CSS Gradient Generator",
    url: "https://github.com/homayunmmdy/Walmart/assets/129702378/0cc5257d-0f62-4451-a03f-cbd84e640045",
    tools: ["reactjs", "css", "tailwind", "typescript"],
    live_demo: "https://gradient-generator-three-phi.vercel.app/",
    source_code:
      "https://github.com/homayunmmdy/Gradient-Generator",
  },
  {
    id: "7",
    title: "Box shadow generator",
    url: "https://github.com/homayunmmdy/Magnify/assets/129702378/7be6a93f-66cb-482a-9706-6406a5a9d414",
    tools: ["reactjs", "css"],
    live_demo: "https://box-shadow-generator-bay.vercel.app/",
    source_code:
      "https://github.com/homayunmmdy/Box-shadow-generator",
  },
  {
    id: "7",
    title: "JSON Search",
    url: "https://github.com/homayunmmdy/Codestart/assets/129702378/c38e104f-27a0-4c64-83ea-e15b9f442eb4",
    tools: ["reactjs", "typescript","tailwindcss"],
    demo: "https://github.com/homayunmmdy/Codestart/assets/129702378/c38e104f-27a0-4c64-83ea-e15b9f442eb4",
    source_code:
      "https://github.com/homayunmmdy/Projects/tree/master/search",
  },
];
export const ReactCardsdata: CardsType[] = [
  {
    id: "1",
    title: "React Tailwind Typescript Starter",
    imageurl: "https://github.com/homayunmmdy/Projects/assets/129702378/2504111b-dec0-440e-b0cc-c1e87ef7c5ae",
    tools: ["reactjs", "typescript", "tailwindcss"],
    demo: "https://github.com/homayunmmdy/Projects/assets/129702378/2504111b-dec0-440e-b0cc-c1e87ef7c5ae",
    source_code: "https://github.com/homayunmmdy/Projects/tree/master/starter",
  },
  {
    id: "2",
    title: "Simple Counter",
    url: "https://github.com/homayunmmdy/Projects/assets/129702378/989f9abe-434e-4dac-b4c8-e06987180e29",
    tools: ["reactjs", "typescript", "tailwindcss"],
    demo: "https://github.com/homayunmmdy/Projects/assets/129702378/989f9abe-434e-4dac-b4c8-e06987180e29",
    source_code: "https://github.com/homayunmmdy/Projects/tree/master/Simple%20Counter",
  },
];
export const DSACardsdata: DSACardsType[] = [
  {
    id: "1",
    title: "Binary Search",
    imageurl:
      "https://github.com/homayunmmdy/Python/assets/129702378/26083279-e48e-4928-b547-38060e545732",
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
  {
    id: "2",
    title: "Stack",
    imageurl:
      "https://github.com/homayunmmdy/Python/assets/129702378/628fa91f-ecfb-4f3e-94c8-bcbddbfd1573",
    explanation:
      "In computer science, a stack is an abstract data type that serves as a collection of elements with two main operations: Push, which adds an element to the collection, and. Pop, which removes the most recently added element.",
    source_code: `stack = []
 
    # append() function to push
    # element in the stack
    stack.append('a')
    stack.append('b')
    stack.append('c')
     
    print('Initial stack')
    print(stack)
     
    # pop() function to pop
    # element from stack in
    # LIFO order
    print('\nElements popped from stack:')
    print(stack.pop())
    print(stack.pop())
    print(stack.pop())
     
    print('\nStack after elements are popped:')
    print(stack)`,
  },
];
