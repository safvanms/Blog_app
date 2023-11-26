import React, { useEffect, useState } from 'react'
import './blog.css'
import axios from 'axios'

export default function Blog() {
  const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      )
      setBlog(response.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="blog_container">
      <div className="blog_header">
        <h3>Trending Blogs</h3>
      </div>
      <div className="blog_section">
        {loading && (
          <div style={{ margin: '50px', textAlign: 'center' }}>Loading Blogs ...</div>
        )}
        {blog
          ? blog?.map((item) => (
              <div className="blog" key={item.id}>
                <div className="blog_content">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="user">
                  <p>User ID {item.userId}</p>
                  <p>today at 12:21</p>
                </div>
              </div>
            ))
          : 'No trending blogs'}
      </div>
    </div>
  )
}
