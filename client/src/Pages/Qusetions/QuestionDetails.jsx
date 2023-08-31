import React from 'react';
import { useParams } from 'react-router-dom';
import './Questions.css';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers';

const QuestionDetails = () => {

    const { id } = useParams();

    var questionsList = [{

        _id: '1',
        upVotes: 5,
        downVotes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "it means to be",
        questionTags: ['java', 'python', 'express', 'node js', 'react'],
        userPosted: 'sakib',
        userId: 1,
        askedOn: 'jan 1',
        answer: [{
            answerBody: "Answer",
            userAnswered: "SAKIB",
            answeredOn: "jan 2",
            userId: 2,
        }]
    }, {
        _id: '2',
        upVotes: 5,
        downVotes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "it means to be",
        questionTags: ['java', 'python', 'express', 'node js', 'react'],
        userPosted: 'sakib',
        userId: 1,
        askedOn: 'jan 1',
        answer: [{
            answerBody: "Answer",
            userAnswered: "SAKIB",
            answeredOn: "jan 2",
            userId: 2,
        }]
    },
    {
        _id: '3',
        upVotes: 5,
        downVotes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "it means to be",
        questionTags: ['java', 'python', 'express', 'node js', 'react'],
        userPosted: 'sakib',
        askedOn: 'jan 1',
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: "SAKIB",
            answeredOn: "jan 2",
            userId: 2,
        }]
    },
    {
        _id: '4',
        upVotes: 5,
        downVotes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "it means to be",
        questionTags: ['java', 'python', 'express', 'node js', 'react'],
        userPosted: 'sakib',
        userId: 1,
        askedOn: 'jan 1',
        answer: [{
            answerBody: "Answer",
            userAnswered: "SAKIB",
            answeredOn: "jan 2",
            userId: 2,
        }]
    }, {
        _id: '5',
        upVotes: 5,
        downVotes: 3,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "it means to be",
        questionTags: ['java', 'python', 'express', 'node js', 'react'],
        userPosted: 'sakib',
        askedOn: 'jan 1',
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: "SAKIB",
            answeredOn: "jan 2",
            userId: 2,
        }]
    }
    ];

    return (
        <div className='question-details-page'>
            {
                questionsList === null ?
                    <h1>loading...</h1> :
                    <>
                        {
                            questionsList.filter(question => question._id === id).map(question => (
                                <div key={question._id}>

                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2' >
                                            <div className="question-votes">
                                                <img src="/image/up-long.svg" alt='upvote' width="12px" className='votes-icon' />
                                                <p>{question.upVotes - question.downVotes}</p>
                                                <img src='/image/down-long.svg' alt='downvote' width="12px" className='votes-icon' />
                                            </div>
                                            <div style={{ width: "100%" }} >
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className="question-details-tag">
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button type='button' className='btn' >Share</button>
                                                        <button type='button' >Delete</button>
                                                    </div>
                                                    <div>
                                                        <p>asked {question.askedOn}</p>
                                                        <Link to={`/User/${question.userId}`} className='user-link' style={{ color: "#0086d8" }}>
                                                            <Avatar backgroundColor="orange" padding="7px 10px" borderRadius="4px" color="#fff">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div >
                                                                {question.userPosted}

                                                            </div>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} answers</h3>
                                                <DisplayAnswers key={question._id} question={question} />
                                            </section>
                                        )
                                    }
                                    <section className='post-ans-container'>
                                        <h3 >Your Answer </h3>
                                        <form>
                                            <textarea name="textarea" id="" cols="30" rows="10"></textarea><br />
                                            <input type="submit" className='post-ans-btn' value="Post Your Anser" />
                                        </form>
                                        <p>Borwse Other Question  Tagged
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                                ))
                                            } or {
                                                <Link to='/MyQuestion' style={{ textDecoration: "none", color: "#009dff" }}>Ask Your own Question </Link>

                                            }
                                        </p>
                                    </section>


                                </div>
                            ))
                        }
                    </>
            }


        </div>
    )
}

export default QuestionDetails;