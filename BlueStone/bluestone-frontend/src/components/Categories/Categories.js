
function Categories() {
    return (
      <>
<section className="categories" id="categories">
    <h1 className="heading">
      <span>Categories</span>
    </h1>
    <div className="box-container">
      <div className="box">
        <a href="/Mens">
        <i class="fa-sharp fa-solid fa-person cat-logos-vk"></i>
        </a>
        
        <h3>Men</h3>
        <p>upto 45%</p>
        <a href="/Mens" className="btn">
          Shop Now
        </a>
      </div>
      <div className="box">
        <a href="/Women">
        <i class="fa-solid fa-person-dress cat-logos-vk"></i>
        </a>
        <h3>Women</h3>
        <p>upto 40%</p>
        <a href="/Women" className="btn">
          Shop Now
        </a>
      </div>
      <div className="box">
        <a href="/Child">
        <i class="fa-sharp fa-solid fa-child cat-logos-vk"></i>
        </a>
        <h3>Child</h3>
        <p>upto 20%</p>
        <a href="/Child" className="btn">
          Shop Now
        </a>
      </div>
    </div>
  </section>
  </>
  
  );
}

export default Categories;
