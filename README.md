# React_Practice_01

-- React Class Lifecycle Method
Construstor
Render
componentdidmount
componentDidupdate
componentWillUnmount

      -- React functional Lifecycle Method/API
            UseEffect
             - takes a callback method and a dependency array(optional)
             - with just the callback function useeffect is called in every render (MOUNT)
             - with an empty dependency array useEffect is called in the initial render (MOUNT)
             - with a dependency useeffect is called only when the dependency array elements updates (UPDATE)
             - we can return from useEffect and clean up the code (UNMOUNT)

How to optimise our app.
` treating it as a bundle of many small applications, we can reduce the load of delivering a large application
it is called in many name -
-- Bundling
-- Code splitting
-- lazy loading
-- Chunking
-- On demand loading
