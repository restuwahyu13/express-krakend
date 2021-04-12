const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const authorSchema = require('../models')
const authToken = require('../middlewares/middleware.auth')

router.post('/author/create', authToken, async (req, res) => {
	if (req.params.id == undefined || !mongoose.isValidObjectId(req.params.id)) {
		return res.status(401).json({
			status: 'CREATED_AUTHORS_ERROR',
			code: res.statusCode,
			method: req.method,
			message: 'id must be mongoid'
		})
	}

	const checkAuthor = await authorSchema.findOne({ name: req.body.authorName }).lean()
	if (!checkAuthor) {
		return res.status(409).json({
			status: 'CREATED_AUTHORS_ERROR',
			code: res.statusCode,
			method: req.method,
			message: 'author name already exist'
		})
	}

	const addAuthor = await authorSchema.create({
		bookId: req.body.bookId,
		name: req.body.authorName,
		state: req.body.authorState,
		country: req.body.authorCountry,
		createdAt: new Date()
	})

	if (!addAuthor) {
		return res.status(403).json({
			status: 'CREATED_AUTHORS_ERROR',
			code: res.statusCode,
			method: req.method,
			message: 'add new book failed'
		})
	}

	return res.status(201).json({
		status: 'CREATED_AUTHORS_SUCCESS',
		code: res.statusCode,
		method: req.method
	})
})

router.get('/author/results', authToken, async (req, res) => {
	if (req.params.id == undefined || !mongoose.isValidObjectId(req.params.id)) {
		return res.status(401).json({
			status: 'FIND_ALL_AUTHORS_ERROR',
			code: res.statusCode,
			method: req.method,
			message: 'id must be a mongoid'
		})
	}

	const findAllAuthors = await authorSchema.find({}).populate('bookId').lean()

	if (findAllAuthors.length < 1) {
		return res.status(404).json({
			status: 'FIND_ALL_AUTHORS_ERROR',
			code: res.statusCode,
			method: req.method,
			message: 'authors data is not exist',
			authors: findAllAuthors
		})
	}

	return res.status(200).json({
		status: 'FIND_ALL_AUTHORS_SUCCESS',
		code: res.statusCode,
		method: req.method,
		message: 'authors data already exist',
		authors: findAllAuthors
	})
})

// router.get('/book/result/:id', authToken, async (req, res) => {
// 	if (req.params.id != undefined || mongoose.isValidObjectId(req.params.id)) {
// 		return res.status(401).json({
// 			status: 'FIND_ALL_AUTHORS_ERROR',
// 			code: res.statusCode,
// 			method: req.method,
// 			message: 'id must be a mongoid'
// 		})
// 	}

// 	const findBook = await authorSchema.findById({ _id: req.params.id }).lean()

// 	if (!findBook) {
// 		return res.status(404).json({
// 			status: 'FIND_BOOK_ERROR',
// 			code: res.statusCode,
// 			method: req.method,
// 			message: 'book data is not exist',
// 			books: findBook
// 		})
// 	}

// 	return res.status(200).json({
// 		status: 'FIND_BOOK_SUCCESS',
// 		code: res.statusCode,
// 		method: req.method,
// 		message: 'book data already exist',
// 		book: findBook
// 	})
// })

// router.delete('/book/delete/:id', authToken, async (req, res) => {
// 	const findBookAndDelete = await authorSchema.findOneAndDelete({ _id: req.params.id }).lean()

// 	if (!findBookAndDelete) {
// 		return res.status(404).json({
// 			status: 'DELETE_BOOK_ERROR',
// 			code: res.statusCode,
// 			method: req.method,
// 			message: 'book data is not exist'
// 		})
// 	}

// 	return res.status(200).json({
// 		status: 'DELETE_BOOK_SUCCESS',
// 		code: res.statusCode,
// 		method: req.method,
// 		message: `delete one book data successfully`
// 	})
// })

// router.get('/book/update/:id', authToken, async (req, res) => {
// 	const findBookAndUpdate = await authorSchema
// 		.findOneAndUpdate(
// 			{ _id: req.params.id },
// 			{
// 				name: req.body.bookNamae,
// 				price: req.body.bookPrice,
// 				releaseDate: new Date(req.body.bookReleaseDate),
// 				publishDate: new Date(req.body.bookPublishDate),
// 				language: [...req.body.bookLanguage],
// 				isbn: req.body.bookIsbn,
// 				publisher: req.body.bookPublisher,
// 				createdAt: new Date()
// 			}
// 		)
// 		.lean()

// 	if (!findBookAndUpdate) {
// 		return res.status(404).json({
// 			status: 'UPDATE_BOOK_ERROR',
// 			code: res.statusCode,
// 			method: req.method,
// 			message: 'book data is not exist'
// 		})
// 	}

// 	return res.status(200).json({
// 		status: 'UPDATE_BOOK_SUCCESS',
// 		code: res.statusCode,
// 		method: req.method,
// 		message: `update one book data successfully`
// 	})
// })

module.exports = router
