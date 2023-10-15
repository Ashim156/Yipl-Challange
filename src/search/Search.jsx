import {BsSearch} from 'react-icons/bs'

const Search = () => {
    return (
      <>
        <form >
            <div className="w-[400px] h-[20px] flex gap-2 items-center ">
            <BsSearch size={24} />
            <input
              type="text"
              className=" text-left w-[300px] h-[20px] "
              placeholder="Search"
             
            />
            </div>

        </form>
      </>
    );
  };
  
  export default Search;