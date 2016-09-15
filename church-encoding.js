var ZERO = function(f) {
	return function(x) {
		return x;
	}
}

var ONE = function(f) {
	return function(x) {
		return f(ZERO(f)(x));
	}
}

var TWO = function(f) {
	return function(x) {
		return f(ONE(f)(x));
	}
}

var THREE = function(f) {
	return function(x) {
		return f(TWO(f)(x));
	}
}

var SUCC = function(n) {
	return function(f) {
		return function(x) {
			return f(n(f)(x));
		}
	}
}

var TRUE = function(a) {
	return function(b) {
		return a;
	}
}

var FALSE = function(a) {
	return function(b) {
		return b;
	}
}

var NOT = function(b) {
	return b(FALSE)(TRUE);
}

var AND = function(a) {
	return function(b) {
		return a(b)(FALSE);
	}
}

var OR = function(a) {
	return function(b) {
		return a(TRUE)(b);
	}
}

var XOR = function(a) {
	return function(b) {
		return a(NOT(b))(b);
	}
}

var IF = function(p) {
	return function(a) {
		return function(b) {
			return p(a)(b);
		}
	}
}

var PAIR = function(a) {
	return function(b) {
		return function(f) {
			return f(a)(b);
		}
	}
}

var HEAD = function(p) {
	return p(TRUE);
}

var TAIL = function(p) {
	return p(FALSE);
}

var f = function(x) {
	return x + 1;
}

console.log(SUCC(THREE)(f)(0));
