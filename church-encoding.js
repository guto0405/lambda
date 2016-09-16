module.exports = function () {
	var self = this;

	self.ZERO = function (f) {
		return function (x) {
			return x;
		}
	}

	self.ONE = function (f) {
		return function (x) {
			return f(self.ZERO(f)(x));
		}
	}

	self.TWO = function (f) {
		return function (x) {
			return f(self.ONE(f)(x));
		}
	}

	self.THREE = function (f) {
		return function (x) {
			return f(self.TWO(f)(x));
		}
	}

	self.SUCC = function (n) {
		return function (f) {
			return function (x) {
				return f(n(f)(x));
			}
		}
	}

	self.TRUE = function (a) {
		return function (b) {
			return a;
		}
	}

	self.FALSE = function (a) {
		return function (b) {
			return b;
		}
	}

	self.NOT = function (b) {
		return b(self.FALSE)(self.TRUE);
	}

	self.AND = function (a) {
		return function (b) {
			return a(b)(self.FALSE);
		}
	}

	self.OR = function (a) {
		return function (b) {
			return a(self.TRUE)(b);
		}
	}

	self.XOR = function (a) {
		return function (b) {
			return a(self.NOT(b))(b);
		}
	}

	self.IF = function (p) {
		return function (a) {
			return function (b) {
				return p(a)(b);
			}
		}
	}

	self.PAIR = function (a) {
		return function (b) {
			return function (f) {
				return f(a)(b);
			}
		}
	}

	self.HEAD = function (p) {
		return p(self.TRUE);
	}

	self.TAIL = function (p) {
		return p(self.FALSE);
	}
};
