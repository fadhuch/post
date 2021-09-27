import React, { useContext, useState, useEffect } from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../context/Provider";
import axios from "axios";

function Post() {
	const { state, setState, comments, setComments, replies, getComment } =
		useContext(MyContext);

	const [post, setPost] = useState("");
	const [newState, setNewState] = useState([]);
	const [reply, setReply] = useState("");
	const [showPostComments, setShowPostComments] = useState([]);
	const [commentsShowingCount, setCommentsShowingCount] = useState(1);
	const [viewMoreCount, setViewMoreCount] = useState([]);
	const [singlePostCommentsCount, setSinglePostCommentsCount] = useState([]);

	useEffect(() => {
		setPost(state.data);
		setReply(replies.data);
	}, [state.data, replies.data]);

	function handleCommentOpen(id) {
		var num = comments.data.filter((i) => i.post === id).length;
		if (!showPostComments.includes(id)) {
			setShowPostComments([...showPostComments, id]);
		} else if (showPostComments.includes(id)) {
			var arr = [...showPostComments];
			var com = showPostComments.filter((i) => i === id);
			let comstr = com.toString();
			var ind = arr.indexOf(comstr);
			arr.splice(ind, 1);
			setShowPostComments(arr);
		}
	}

	function handleNewCommentSubmit(event) {
		event.preventDefault();
		event.target.reset();
		var data = new FormData();
		data.append("post", comments.id);
		data.append("comment", comments.postComment);
		var config = {
			method: "post",
			url: "http://127.0.0.1:8000/myapi/new-comments/",
			data: data,
		};
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));

				getComment();
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function handleNewCommentChange(e, id) {
		var value = e.target.value;
		setComments({
			...comments,
			postComment: value,
			id: id,
		});
	}

	function handleCommentsShowMore(id) {
		if (state.data.filter((i) => i.id === id)) {
			var nm = parseInt(
				state.data.filter((i) => i.id === id).map((i) => i.comments)
			);
			setState(
				{ ...state },
				state.data.filter((i) => i.id === id).map((i) => (i.no = nm))
			);
			console.log(state, "pop");
		}
	}

	// console.log(commentsShowingCount)
	return (
		<>
			{post &&
				post.map((row, index) => (
					<div
						className="singlePost bg-white mb-5"
						styles={{ height: "500px", overflowY: "scroll" }}
					>
						<div className="postHeading px-3 pt-3">
							<div className="postHeadingProfile">
								<img src="./images/profile.jpeg" alt="" />
							</div>
							<p className="w-100 m-0 font-weight-bold text-left">
								Profile Name
							</p>
						</div>
						<div className="postData">
							<div className="postDataText p-3 text-left">
								<p className="font-weight-bold">{row.heading}</p>
								{row.description}
							</div>
							{row.photo && (
								<div className="postDataImage">
									<img src={row.photo} alt="college" />
								</div>
							)}
						</div>
						<div className="postCount p-3 ">
							<button className="postCountButton">
								<FontAwesomeIcon icon="thumbs-up" className="postCountLike" />
							</button>
							<div className="postCountText">
								<p className="text-muted mb-0"></p>
							</div>
						</div>
						<div className="borderBottom"></div>
						<div className="postResponse py-2 px-4">
							<div className="postResponseLike">
								<button>
									<FontAwesomeIcon
										icon={["far", "thumbs-up"]}
										className="mr-2 faIcon"
									/>
									Like
								</button>
							</div>
							<div
								className="postResponseComment"
								onClick={() => handleCommentOpen(row.id)}
							>
								<button>
									<FontAwesomeIcon
										icon={["far", "comment-alt"]}
										className="mr-2 faIcon"
									/>
									Comment
								</button>
							</div>
							<div className="postResponseShare">
								<button>
									<FontAwesomeIcon icon="share" className="mr-2 faIcon" />
									Share
								</button>
							</div>
						</div>
						{showPostComments.includes(row.id) && (
							<div className="borderBottom"></div>
						)}
						{showPostComments.includes(row.id) && (
							<div className="commentTop d-flex  justify-content between w-100 p-3">
								{row.comments > 1 && (
									<div className="commentViewMore text-muted text-left w-100 ">
										<div onClick={() => handleCommentsShowMore(row.id)}>
											view {row.comments - 1} more
										</div>
									</div>
								)}
								{/* <div className="commentFilter text-muted text-right w-100">All comments  &#9662; </div> */}
							</div>
						)}

						{showPostComments.includes(row.id) &&
							comments.data
								.filter((i) => i.post === row.id)
								.slice(0, commentsShowingCount)
								.map((com, index) => (
									<div className="comments mb-4 container">
										<div className="commentsLeft">
											<div className="commentsLeftImage">
												<img src="./images/profile.jpeg" alt="" />
											</div>
										</div>
										<div className="commentsRight">
											<div className="commentsRightData">
												<h4 className="commentsRightName text-left">Junaid</h4>
												<p className="commentsRightText text-left">
													{com.comment}
												</p>
											</div>
											<div className="commentsRightResponse">
												<button className="commentLike">Like</button>&middot;
												<button className="commentReply">Reply</button>&middot;
											</div>
											{reply &&
												reply.map((rep, index) => (
													<div className="commentsRightReply">
														<div className="commentsReplyLeft">
															<div className="commentsReplyLeftImage">
																<img src="./images/profile.jpeg" alt="" />
															</div>
														</div>
														<div className="commentsReplyRight">
															<form action="" className="commentReplyForm">
																<input
																	type="text"
																	placeholder="Write a reply..."
																/>
															</form>
															<div className="commentReplyEmoji d-flex justify-content-end mr-1 w-100">
																<div className="d-flex">
																	<button>
																		<FontAwesomeIcon
																			icon={["far", "smile"]}
																			className=" commentSmile"
																		/>
																	</button>
																	<button>
																		<FontAwesomeIcon
																			icon="camera"
																			className=" commentCamera"
																		/>
																	</button>
																	{/* <button><FontAwesomeIcon icon={["far", "smile"]} className=" commentGif" /></button> */}
																	<button>
																		<FontAwesomeIcon
																			icon={["far", "sticky-note"]}
																			className=" commentSticker"
																		/>
																	</button>
																</div>
															</div>
														</div>
													</div>
												))}
										</div>
									</div>
								))}
						<div className="addComment mb-4 container">
							<div className="addCommentLeft">
								<div className="addCommentLeftImage">
									<img src="./images/profile.jpeg" alt="" />
								</div>
							</div>

							<div className="addCommentRight">
								<form
									action=""
									className="addCommentForm"
									onSubmit={(event) => handleNewCommentSubmit(event, row.id)}
									method="POST"
								>
									<input
										type="text"
										placeholder="Write a reply..."
										onChange={(e) => handleNewCommentChange(e, row.id)}
										value={comments.comment}
										name="comment"
									/>
								</form>
								<div className="addCommentEmoji d-flex justify-content-end mr-1 w-100">
									<div className="d-flex">
										<button>
											<FontAwesomeIcon
												icon={["far", "smile"]}
												className=" commentSmile"
											/>
										</button>
										<button>
											<FontAwesomeIcon
												icon="camera"
												className=" commentCamera"
											/>
										</button>
										{/* <button><FontAwesomeIcon icon={["far", "smile"]} className=" commentGif" /></button> */}
										<button>
											<FontAwesomeIcon
												icon={["far", "sticky-note"]}
												className=" commentSticker"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
}
export default Post;
