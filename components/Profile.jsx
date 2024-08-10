
import PostCard from "./PostCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left'>
        <span className='text-blue-400'>{name} Profile</span>
      </h1>
      <p className='mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left'>{desc}</p>

      <div className='mt-10 space-x-6 py-8 sm:gap-6 flex justify-start flex-wrap'>
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
