import React, { useContext, useEffect } from "react";
import "./addPostModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../context/Provider";
import axios from "axios";

function AddPostModal() {
	const {
		modalOpen,
		setModalOpen,
		formData,
		setFormData,
		setCreatePost,
		createPost,
		getData,
	} = useContext(MyContext);

	const postData = (e) => {
		var config = {
			method: "post",
			url: "http://127.0.0.1:8000/myapi/new/",
			data: e,
		};
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				handleClick();
				getData();
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	useEffect(() => {
		if (modalOpen === true) {
			setCreatePost(!null);
		}
	}, [modalOpen, setCreatePost]);

	function handleChange(e) {
		const value = e.target.value;
		setFormData({
			...formData,
			[e.target.name]: value,
		});
	}
	function handleImage(e) {
		setFormData({
			...formData,
			photo: e.target.files[0],
		});
	}
	function handleClick() {
		setCreatePost(null);
		setModalOpen(false);
	}
	function handleSubmit(e) {
		e.preventDefault();
		var data = new FormData();
		if (formData.heading) {
			data.append("heading", formData.heading);
		}
		if (formData.description) {
			data.append("description", formData.description);
		}
		if (formData.photo) {
			data.append("photo", formData.photo, formData.photo.name);
		}
		postData(data);
	}

	return (
		<>
			{createPost && (
				<div className="addPostModal">
					<div className="container w-100 d-flex justify-content-center align-items-center h-100">
						<div className="createPost container">
							<div className="createPostHead w-100">
								<div className="text w-100 ">
									<h5 className="font-weight-bold">Create post</h5>
								</div>
								<div className="close" onClick={handleClick}>
									<img src="./icons/cancel.png" alt="" />
								</div>
							</div>
							<form
								className="createPostBody"
								onSubmit={handleSubmit}
								method="POST"
							>
								<div className="createPostName">
									<div className="profile">
										<div className="image">
											<img src="./images/profile.jpeg" alt="" />
										</div>
									</div>
									<div className="name">
										<div className="text text-left">
											<p className="mb-0">Fahad Ch</p>
										</div>
										<div className="shareWith">Friends &#9662;</div>
									</div>
								</div>
								<div className="createPostText">
									<input
										type="text"
										placeholder="heading"
										className="border-0 w-100"
										onChange={handleChange}
										value={formData.heading}
										name="heading"
									/>
									<textarea
										id=""
										cols=""
										rows="5"
										placeholder="What's on your mind, Fahad?"
										value={formData.description}
										name="description"
										onChange={handleChange}
									></textarea>
								</div>
								<div className="createPostSticker">
									<div className="text">
										<p className="mb-0">Add to your post</p>
									</div>
									<div className="additional">
										<label htmlFor="file-input" className="addPostMediaLabel">
											<FontAwesomeIcon icon={["far", "images"]} className="" />
										</label>
										<input
											className="addPostMedia"
											type="file"
											id="file-input"
											name="photo"
											accept="image/png,image/jpeg"
											onChange={handleImage}
										/>

										<div className="addPostTag">
											<button>
												<FontAwesomeIcon icon="user-tag" className="" />
											</button>
										</div>
										<div className="addPostFeel">
											<button>
												<FontAwesomeIcon
													icon={["far", "laugh-beam"]}
													className=""
												/>
											</button>
										</div>
										<div className="addPostMapMarker">
											<button>
												<FontAwesomeIcon icon="map-marker-alt" className="" />
											</button>
										</div>
										<div className="addPostMedia">
											<button>
												<FontAwesomeIcon
													icon={["far", "images"]}
													className=""
												/>
											</button>
										</div>
									</div>
								</div>
								<div className="createPostSubmit">
									<button type="">Post</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default AddPostModal;
